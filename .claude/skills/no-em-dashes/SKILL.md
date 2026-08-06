---
name: no-em-dashes
description: "House style rule for this project: never write em dashes (—) in generated content (UI copy, JSX text, data files, docs, commit messages). Includes a scan/fix sub-tool to find and clean up em dashes already in the codebase. Use whenever writing new content for this project, or when asked to check/clean up em dashes / dashes / punctuation style."
---

# No Em Dashes

## Rule — apply automatically whenever writing content

Never use the em dash character (`—`, U+2014) in anything written for this project: UI copy, JSX text, data files (`src/data/*.js`), comments, commit messages, PR descriptions, or docs.

Replace it based on the job the em dash was doing:

| Em dash use | Replacement |
|---|---|
| Joining two independent clauses | Period, or comma + conjunction |
| Aside / parenthetical | Parentheses, or a comma pair |
| Introducing a summary or list | Colon |
| Number/date range (e.g. "2020—2021") | Hyphen: "2020-2021" |

Do not substitute an en dash (`–`) used the same way ("clause – clause") — that is the same problem with a shorter glyph. A hyphen/en dash is only fine for genuine ranges or compound words.

Before finishing any writing task, scan your own output for `—` and rewrite any hit before delivering it.

## Sub-tool: scan and fix existing em dashes

To find every em dash already in the codebase:

```bash
python "${CLAUDE_PLUGIN_ROOT}/.claude/skills/no-em-dashes/scripts/scan_em_dashes.py" <path>
```

- `<path>` defaults to the current directory if omitted.
- Skips `node_modules`, `.git`, `dist`, `.vercel`, and similar build/tooling directories.
- Scans `.js .jsx .ts .tsx .md .mdx .html .css .json .txt` by default (override with `--ext`).
- Prints every match as `file:line: <text>` for review.

To apply the default cleanup and rewrite files in place:

```bash
python "${CLAUDE_PLUGIN_ROOT}/.claude/skills/no-em-dashes/scripts/scan_em_dashes.py" <path> --fix
```

`--fix` is pattern-based, not grammar-aware:
- `" — "` (spaced em dash) → `", "`
- `"—"` with no surrounding spaces (e.g. a range) → `"-"`

**Always read the diff after `--fix`** (e.g. `git diff`) and manually reword any line where the comma substitution reads awkwardly — the script does not understand sentence structure, only pattern-match.
