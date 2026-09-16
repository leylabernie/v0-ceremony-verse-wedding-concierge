#!/usr/bin/env python3
"""Update all blog posts to assert Mini as the author.

Replaces `authorName: "CeremonyVerse"` with `authorName: "Mini"` across all
blog posts. Idempotent — running it twice produces the same result.

Usage: python3 scripts/update_blog_authors.py
"""
from pathlib import Path
import re
import sys

REPO_ROOT = Path(__file__).resolve().parent.parent
BLOG_DIR = REPO_ROOT / "app" / "blog"

AUTHOR_PATTERN = re.compile(r'(authorName:\s*)["\']CeremonyVerse["\']', re.MULTILINE)


def update_blog_file(page_path: Path) -> tuple[bool, str]:
    original = page_path.read_text(encoding="utf-8")
    updated, count = AUTHOR_PATTERN.subn(r'\1"Mini"', original)
    if count == 0:
        if 'authorName: "Mini"' in original:
            return False, f"SKIP (already Mini): {page_path.relative_to(REPO_ROOT)}"
        return False, f"WARN (no match found): {page_path.relative_to(REPO_ROOT)}"
    page_path.write_text(updated, encoding="utf-8")
    return True, f"UPDATED ({count} replacement): {page_path.relative_to(REPO_ROOT)}"


def main() -> int:
    if not BLOG_DIR.is_dir():
        print(f"ERROR: blog directory not found at {BLOG_DIR}", file=sys.stderr)
        return 1
    blog_pages = sorted(BLOG_DIR.glob("*/page.tsx"))
    if not blog_pages:
        print(f"ERROR: no blog/*/page.tsx files found under {BLOG_DIR}", file=sys.stderr)
        return 1
    updated_count = 0
    skipped_count = 0
    warned_count = 0
    print(f"Scanning {len(blog_pages)} blog posts under {BLOG_DIR.relative_to(REPO_ROOT)}...")
    print()
    for page_path in blog_pages:
        changed, message = update_blog_file(page_path)
        print(f"  {message}")
        if changed:
            updated_count += 1
        elif message.startswith("SKIP"):
            skipped_count += 1
        else:
            warned_count += 1
    print()
    print(f"Done. {updated_count} updated, {skipped_count} already correct, {warned_count} warnings.")
    return 0 if warned_count == 0 else 2


if __name__ == "__main__":
    sys.exit(main())
