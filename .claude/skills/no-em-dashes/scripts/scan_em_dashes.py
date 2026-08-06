#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Scan (and optionally fix) em dash (U+2014) usage across the project.

Usage:
    python scan_em_dashes.py [path] [--fix] [--ext .jsx,.js,.md]

Without --fix: reports every match as file:line: <line text>.
With --fix: applies a safe default substitution and rewrites files in place.
    " — "  (em dash with a space on both sides)   -> ", "
    "—"    (em dash with no surrounding spaces,
            e.g. a number/date range like 2020—2021) -> "-"
This is a pattern-level fix, not a grammar-aware one. Always re-read every
changed line afterward -- some comma substitutions will read awkwardly and
need a manual reword instead.
"""

import argparse
import os
import sys

EM_DASH = "—"

DEFAULT_EXTENSIONS = {
    ".js", ".jsx", ".ts", ".tsx", ".md", ".mdx", ".html", ".css", ".json", ".txt",
}

EXCLUDED_DIRS = {
    "node_modules", "dist", "nanobanana-images", "build", ".next", ".cache",
}


def iter_files(root, extensions):
    for dirpath, dirnames, filenames in os.walk(root):
        # Skip noise dirs and any dot-directory (.git, .claude, .agents, .vscode, .vercel, ...) --
        # skill/tooling definitions aren't "the website" and shouldn't be flagged or rewritten.
        dirnames[:] = [d for d in dirnames if d not in EXCLUDED_DIRS and not d.startswith(".")]
        for name in filenames:
            if os.path.splitext(name)[1].lower() in extensions:
                yield os.path.join(dirpath, name)


def find_matches(filepath):
    matches = []
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            lines = f.readlines()
    except (UnicodeDecodeError, OSError):
        return matches

    for idx, line in enumerate(lines, start=1):
        if EM_DASH in line:
            matches.append((idx, line.rstrip("\n")))
    return matches


def fix_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    if EM_DASH not in content:
        return False

    fixed = content.replace(f" {EM_DASH} ", ", ")
    fixed = fixed.replace(EM_DASH, "-")

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(fixed)
    return True


def main():
    # Windows consoles default to a codepage (e.g. cp1252) that can't encode every
    # character that might appear in a scanned line; force UTF-8 with replacement
    # so a stray glyph in file content never crashes the report.
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except AttributeError:
        pass

    parser = argparse.ArgumentParser(description="Scan/fix em dash usage in the project.")
    parser.add_argument("path", nargs="?", default=".", help="Root path to scan (default: current directory)")
    parser.add_argument("--fix", action="store_true", help="Apply the default substitution and rewrite files")
    parser.add_argument("--ext", help="Comma-separated list of extensions to include, overriding the default set")
    args = parser.parse_args()

    extensions = DEFAULT_EXTENSIONS
    if args.ext:
        extensions = {e if e.startswith(".") else f".{e}" for e in args.ext.split(",")}

    root = os.path.abspath(args.path)
    total_matches = 0
    files_with_matches = 0
    fixed_files = []

    for filepath in sorted(iter_files(root, extensions)):
        matches = find_matches(filepath)
        if not matches:
            continue

        files_with_matches += 1
        total_matches += len(matches)
        rel = os.path.relpath(filepath, root)

        print(f"\n{rel}  ({len(matches)} match{'es' if len(matches) != 1 else ''})")
        for line_no, text in matches:
            print(f"  {line_no}: {text.strip()}")

        if args.fix:
            if fix_file(filepath):
                fixed_files.append(rel)

    print(f"\n{'=' * 60}")
    print(f"Found {total_matches} em dash occurrence(s) in {files_with_matches} file(s).")

    if args.fix:
        print(f"Rewrote {len(fixed_files)} file(s):")
        for rel in fixed_files:
            print(f"  - {rel}")
        print("\nReview every changed line (e.g. `git diff`) -- the substitution is")
        print("pattern-based, not grammar-aware, and some lines will need a manual reword.")
    elif total_matches:
        print("Re-run with --fix to apply the default substitution, then review the diff.")

    return 1 if total_matches and not args.fix else 0


if __name__ == "__main__":
    sys.exit(main())
