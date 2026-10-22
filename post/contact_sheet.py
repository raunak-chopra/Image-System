"""Build a labelled contact sheet from folders and/or image files.

  python post/contact_sheet.py outputs/spunge/tests --cols 5 --out sheet.jpg
"""
import argparse
from pathlib import Path

from PIL import Image, ImageDraw, ImageOps

EXT = {".png", ".jpg", ".jpeg", ".webp"}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("paths", nargs="+")
    ap.add_argument("--cols", type=int, default=4)
    ap.add_argument("--cell", type=int, default=360)
    ap.add_argument("--out", default="contact-sheet.jpg")
    a = ap.parse_args()
    files = []
    for p in map(Path, a.paths):
        files += sorted(x for x in p.rglob("*") if x.suffix.lower() in EXT) if p.is_dir() else [p]
    if not files:
        raise SystemExit("no images found")
    c, pad, lab = a.cell, 12, 22
    rows = -(-len(files) // a.cols)
    sheet = Image.new("RGB", (a.cols * (c + pad) + pad, rows * (c + lab + pad) + pad), (245, 245, 245))
    d = ImageDraw.Draw(sheet)
    for i, f in enumerate(files):
        x, y = pad + (i % a.cols) * (c + pad), pad + (i // a.cols) * (c + lab + pad)
        im = ImageOps.contain(Image.open(f).convert("RGB"), (c, c))
        sheet.paste(im, (x + (c - im.width) // 2, y + (c - im.height) // 2))
        d.text((x, y + c + 4), f.name[:48], fill=(40, 40, 40))
    sheet.save(a.out, quality=88)
    print("%s: %d images" % (a.out, len(files)))


if __name__ == "__main__":
    main()
