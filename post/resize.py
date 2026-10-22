"""Resize/crop an image to one or more format specs from post/specs.json.

  python post/resize.py input.png amazon-gallery
  python post/resize.py input.png meta-feed-4x5 meta-story-9x16 --out some/dir
  python post/resize.py input.png amazon-main --fit contain --pad 255,255,255

--fit cover (default): scale to fill, crop (shift with --anchor top|bottom|left|right).
--fit contain: scale to fit inside the frame, pad with --pad colour.
RGBA inputs keep transparent padding; --pad colours opaque RGB padding.
JPEG output is re-encoded at decreasing quality until under the spec's max_kb.
"""
import argparse
import io
import json
import sys
from pathlib import Path

from PIL import Image, ImageOps

SPECS = json.loads((Path(__file__).parent / "specs.json").read_text(encoding="utf-8"))


def fit(img, w, h, mode, pad, anchor):
    if mode == "contain":
        inner = ImageOps.contain(img, (w, h), Image.LANCZOS)
        pad_color = pad + (0,) if img.mode == "RGBA" and len(pad) == 3 else pad[:3]
        canvas = Image.new(img.mode, (w, h), pad_color)
        # Copy RGBA channels unchanged. Using inner as a mask would apply its
        # alpha a second time and blend foreground RGB into the padding colour.
        canvas.paste(inner, ((w - inner.width) // 2, (h - inner.height) // 2))
        return canvas
    centering = {"top": (0.5, 0), "bottom": (0.5, 1), "left": (0, 0.5), "right": (1, 0.5)}.get(anchor, (0.5, 0.5))
    return ImageOps.fit(img, (w, h), Image.LANCZOS, centering=centering)


def encode(img, fmt, max_kb):
    buf = io.BytesIO()
    if fmt == "PNG":
        img.save(buf, "PNG", optimize=True)
        return buf.getvalue()
    if img.mode != "RGB":
        bg = Image.new("RGB", img.size, (255, 255, 255))
        bg.paste(img, mask=img.getchannel("A") if "A" in img.getbands() else None)
        img = bg
    for q in (95, 92, 88, 84, 80, 75, 70, 60):
        buf = io.BytesIO()
        img.save(buf, "JPEG", quality=q, optimize=True, subsampling=0 if q >= 90 else 2)
        if buf.tell() / 1024 <= max_kb:
            break
    return buf.getvalue()


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("input")
    ap.add_argument("formats", nargs="+")
    ap.add_argument("--out", default="outputs/_resized")
    ap.add_argument("--fit", choices=["cover", "contain"], default="cover")
    ap.add_argument("--anchor", default="center")
    ap.add_argument("--pad", default="255,255,255")
    a = ap.parse_args()
    pad = tuple(int(x) for x in a.pad.split(","))
    raw = ImageOps.exif_transpose(Image.open(a.input))
    src = raw.convert("RGBA" if "A" in raw.getbands() or raw.mode == "P" and "transparency" in raw.info else "RGB")
    out = Path(a.out)
    out.mkdir(parents=True, exist_ok=True)
    for f in a.formats:
        if f.startswith("_") or f not in SPECS:
            sys.exit("unknown format '%s'. Known: %s" % (f, ", ".join(k for k in SPECS if not k.startswith("_"))))
        s = SPECS[f]
        img = fit(src, s["w"], s["h"], a.fit, pad, a.anchor)
        dest = out / ("%s__%s%s" % (Path(a.input).stem, f, ".png" if s["fmt"] == "PNG" else ".jpg"))
        dest.write_bytes(encode(img, s["fmt"], s["max_kb"]))
        print("%s  %dx%d  %.0f KB%s" % (dest, s["w"], s["h"], dest.stat().st_size / 1024, "  [spec unverified]" if s.get("verify") else ""))
        if src.size[0] < s["w"] or src.size[1] < s["h"]:
            print("  note: source %dx%d was upscaled - consider regenerating at higher resolution" % src.size)


if __name__ == "__main__":
    main()
