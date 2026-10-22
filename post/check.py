"""Check exported files against a format spec from post/specs.json.

  python post/check.py amazon-main path/to/file.jpg [more files]

Exit code 1 if any file FAILS. Checks pixel size, aspect, file size, colour mode and, for
amazon-main, a pure-white border and product fill >= 85% (bounding box of non-white pixels).
It does NOT check text legibility, logos, claims or safe zones - see core/qa-checklist.md.
"""
import json
import sys
from pathlib import Path

from PIL import Image, ImageChops

SPECS = json.loads((Path(__file__).parent / "specs.json").read_text(encoding="utf-8"))


def check(fmt, path):
    s = SPECS[fmt]
    p = Path(path)
    img = Image.open(p)
    w, h = img.size
    res = []
    if (w, h) == (s["w"], s["h"]):
        res.append(("size", "%dx%d" % (w, h), "PASS"))
    else:
        same_ratio = abs(w / h - s["w"] / s["h"]) < 0.005
        res.append(("size", "%dx%d (want %dx%d)" % (w, h, s["w"], s["h"]), "WARN" if same_ratio and w >= s["w"] else "FAIL"))
    kb = p.stat().st_size / 1024
    res.append(("file size", "%.0f KB (max %d)" % (kb, s["max_kb"]), "PASS" if kb <= s["max_kb"] else "FAIL"))
    res.append(("colour mode", img.mode, "PASS" if img.mode in ("RGB", "RGBA") else "WARN"))
    if s.get("bg") == "white":
        rgb = img.convert("RGB")
        diff = ImageChops.difference(rgb, Image.new("RGB", rgb.size, (255, 255, 255))).convert("L").point(lambda v: 255 if v > 6 else 0)
        edges = [(0, 0, w, 3), (0, h - 3, w, h), (0, 0, 3, h), (w - 3, 0, w, h)]
        edge_ok = all(diff.crop(b).getextrema()[1] == 0 for b in edges)
        res.append(("white border", "pure white edges" if edge_ok else "non-white pixels on an edge", "PASS" if edge_ok else "FAIL"))
        bbox = diff.getbbox()
        if bbox:
            fill = max((bbox[2] - bbox[0]) / w, (bbox[3] - bbox[1]) / h)
            res.append(("product fill", "%.0f%% (min %.0f%%)" % (fill * 100, s["min_fill"] * 100), "PASS" if fill >= s["min_fill"] else "FAIL"))
    if s.get("verify"):
        res.append(("spec", "unverified in specs.json", "WARN"))
    return res


if __name__ == "__main__":
    if len(sys.argv) < 3 or sys.argv[1] not in SPECS:
        sys.exit(__doc__)
    bad = 0
    for f in sys.argv[2:]:
        print(f)
        for name, val, status in check(sys.argv[1], f):
            print("  [%s] %s: %s" % (status, name, val))
            bad += status == "FAIL"
    sys.exit(1 if bad else 0)
