#!/usr/bin/env python3
"""Update visible bylines across all blog posts to assert Mini as author.

Two patterns handled:
  Pattern A: `By CeremonyVerse` → `By <a href="/about/mini/">Mini</a>`
  Pattern B: `>CeremonyVerse · <Month> <Year><` → `>By <a href="/about/mini/">Mini</a> · <Month> <Year><`

Idempotent — running it twice produces no further changes.

Usage: python3 scripts/update_blog_bylines.py
"""
from pathlib import Path
import re
import sys

REPO_ROOT = Path(__file__).resolve().parent.parent
BLOG_DIR = REPO_ROOT / "app" / "blog"

PATTERN_A = re.compile(r"By CeremonyVerse\b")
MONTHS = "January|February|March|April|May|June|July|August|September|October|November|December"
PATTERN_B = re.compile(rf">\s*CeremonyVerse · ((?:{MONTHS}) \d{{4}})\s*<")

REPLACEMENT_A = (
    'By <a href="/about/mini/" '
    'className="text-[#7a6841] underline underline-offset-4">Mini</a>'
)
REPLACEMENT_A_INLINE_STYLE = (
    'By <a href="/about/mini/" '
    'style={{color:"#7a6841",textDecoration:"underline",textUnderlineOffset:"4px"}}>Mini</a>'
)
REPLACEMENT_B_CLASSNAME = (
    '>By <a href="/about/mini/" '
    'className="text-[#7a6841] underline underline-offset-4">Mini</a> · \\1<'
)
REPLACEMENT_B_INLINE = (
    '>By <a href="/about/mini/" '
    'style={{color:"#7a6841",textDecoration:"underline",textUnderlineOffset:"4px"}}>Mini</a> · \\1<'
)


def update_blog_file(page_path: Path) -> tuple[int, int, str]:
    original = page_path.read_text(encoding="utf-8")
    a_count = 0
    b_count = 0

    def replace_a(match: re.Match) -> str:
        nonlocal a_count
        a_count += 1
        start = max(0, match.start() - 200)
        context = original[start:match.start()]
        if 'className="' in context[-150:]:
            return REPLACEMENT_A
        return REPLACEMENT_A_INLINE_STYLE

    content, _ = re.subn(PATTERN_A, replace_a, original)

    def replace_b(match: re.Match) -> str:
        nonlocal b_count
        b_count += 1
        start = max(0, match.start() - 250)
        context = original[start:match.start()]
        if 'className="' in context[-200:]:
            return re.sub(PATTERN_B, REPLACEMENT_B_CLASSNAME, match.group(0))
        return re.sub(PATTERN_B, REPLACEMENT_B_INLINE, match.group(0))

    content, _ = re.subn(PATTERN_B, replace_b, content)

    if content == original:
        return 0, 0, f"SKIP (no byline pattern): {page_path.relative_to(REPO_ROOT)}"
    page_path.write_text(content, encoding="utf-8")
    return a_count, b_count, f"UPDATED (A:{a_count} B:{b_count}): {page_path.relative_to(REPO_ROOT)}"


def main() -> int:
    if not BLOG_DIR.is_dir():
        print(f"ERROR: blog directory not found at {BLOG_DIR}", file=sys.stderr)
        return 1
    blog_pages = sorted(BLOG_DIR.glob("*/page.tsx"))
    total_a = 0
    total_b = 0
    print(f"Scanning {len(blog_pages)} blog posts under {BLOG_DIR.relative_to(REPO_ROOT)}...")
    print()
    for page_path in blog_pages:
        a, b, message = update_blog_file(page_path)
        total_a += a
        total_b += b
        print(f"  {message}")
    print()
    print(f"Done. Pattern A: {total_a}, Pattern B: {total_b}.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
