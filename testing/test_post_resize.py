"""Alpha regressions: python -m unittest discover -s testing -p test_post_resize.py."""
import io
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from post.resize import encode, fit


class ResizeAlphaTests(unittest.TestCase):
    def test_contain_preserves_foreground_rgba_and_transparent_padding(self):
        src = Image.new("RGBA", (2, 2))
        pixels = [(200, 100, 50, 128), (20, 40, 60, 255),
                  (90, 80, 70, 0), (30, 90, 150, 64)]
        src.putdata(pixels)
        out = fit(src, 4, 2, "contain", (255, 255, 255), "center")
        self.assertEqual(out.crop((1, 0, 3, 2)).tobytes(), src.tobytes())
        self.assertEqual(out.getpixel((0, 0))[3], 0)
        self.assertEqual(out.getpixel((3, 1))[3], 0)
        decoded = Image.open(io.BytesIO(encode(out, "PNG", 100)))
        self.assertEqual(decoded.mode, "RGBA")
        self.assertEqual(decoded.tobytes(), out.tobytes())

    def test_contain_resize_does_not_square_alpha(self):
        out = fit(Image.new("RGBA", (2, 2), (200, 100, 50, 128)),
                  4, 4, "contain", (255, 255, 255), "center")
        self.assertEqual(out.getpixel((1, 1))[3], 128)
        for actual, expected in zip(out.getpixel((1, 1))[:3], (200, 100, 50)):
            self.assertLessEqual(abs(actual - expected), 2)

    def test_rgb_contain_uses_requested_pad_colour(self):
        out = fit(Image.new("RGB", (2, 2), (20, 40, 60)),
                  4, 2, "contain", (12, 34, 56), "center")
        self.assertEqual(out.getpixel((0, 0)), (12, 34, 56))
        self.assertEqual(out.getpixel((1, 0)), (20, 40, 60))

    def test_cover_png_keeps_alpha(self):
        out = fit(Image.new("RGBA", (4, 2), (200, 100, 50, 128)),
                  2, 2, "cover", (255, 255, 255), "center")
        decoded = Image.open(io.BytesIO(encode(out, "PNG", 100)))
        self.assertEqual(decoded.mode, "RGBA")
        self.assertEqual(decoded.getpixel((0, 0))[3], 128)

    def test_jpeg_composites_transparency_over_white_once(self):
        src = Image.new("RGBA", (8, 8), (200, 100, 50, 128))
        contained = fit(src, 16, 8, "contain", (255, 255, 255), "center")
        decoded = Image.open(io.BytesIO(encode(contained, "JPEG", 100)))
        self.assertEqual(decoded.mode, "RGB")
        expected = Image.alpha_composite(Image.new("RGBA", src.size, "white"), src)
        for actual, target in zip(decoded.getpixel((8, 4)), expected.getpixel((4, 4))[:3]):
            self.assertLessEqual(abs(actual - target), 2)
        self.assertEqual(decoded.getpixel((0, 4)), (255, 255, 255))

    def test_cli_preserves_palette_transparency_and_semitransparency(self):
        sandbox = ROOT / "outputs" / "_tests"
        sandbox.mkdir(parents=True, exist_ok=True)
        with tempfile.TemporaryDirectory(prefix="resize-alpha-", dir=sandbox) as folder:
            folder = Path(folder)
            src = Image.new("P", (8, 4), 1)
            src.putpalette([255, 255, 255, 200, 100, 50] + [0] * (768 - 6))
            src.info["transparency"] = bytes([0, 128])
            source = folder / "palette.png"
            src.save(source)
            result = subprocess.run(
                [sys.executable, str(ROOT / "post" / "resize.py"), str(source),
                 "app-play-icon", "--fit", "contain", "--out", str(folder)],
                capture_output=True, text=True)
            self.assertEqual(result.returncode, 0, result.stderr)
            with Image.open(folder / "palette__app-play-icon.png") as out:
                self.assertEqual(out.size, (512, 512))
                self.assertEqual(out.mode, "RGBA")
                self.assertEqual(out.getpixel((256, 256))[3], 128)
                self.assertEqual(out.getpixel((0, 0))[3], 0)


if __name__ == "__main__":
    unittest.main()
