"""
Migrates D:\mind\mymind\cards.csv into D1-compatible SQL.
Run: python scripts/migrate-mymind.py
Then: npx wrangler d1 execute devopsmantra-db --file=scripts/migrate.sql --remote
"""

import csv
import json
import sys
from pathlib import Path

CSV_PATH = Path(__file__).parent.parent.parent / "mymind" / "cards.csv"
SQL_PATH = Path(__file__).parent / "migrate.sql"


def esc(value: str | None) -> str:
    """Escape a value for SQL single-quoted string."""
    if value is None:
        return "NULL"
    return "'" + value.replace("'", "''") + "'"


def parse_tags(raw: str) -> str:
    """Convert comma-separated tag string to JSON array string."""
    if not raw or not raw.strip():
        return "[]"
    tags = [t.strip() for t in raw.split(",") if t.strip()]
    return json.dumps(tags)


def main():
    if not CSV_PATH.exists():
        print(f"ERROR: cards.csv not found at {CSV_PATH}", file=sys.stderr)
        sys.exit(1)

    rows = []
    with open(CSV_PATH, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            rows.append(row)

    print(f"Read {len(rows)} cards from cards.csv")

    lines = ["-- mymind migration", ""]

    skipped = 0
    for row in rows:
        card_id = row.get("id", "").strip()
        card_type = row.get("type", "WebPage").strip() or "WebPage"
        title = row.get("title", "").strip() or None
        url = row.get("url", "").strip() or None
        content = row.get("content", "").strip() or None
        note = row.get("note", "").strip() or None
        tags_raw = row.get("tags", "").strip()
        created = row.get("created", "").strip()

        if not card_id:
            skipped += 1
            continue

        # Truncate very large content — store summary only, full text would go to R2
        if content and len(content) > 5000:
            content = content[:5000]

        tags_json = parse_tags(tags_raw)

        # Derive a title from content if missing
        if not title and content:
            first_line = content.strip().split("\n")[0][:200]
            title = first_line or None

        lines.append(
            f"INSERT OR IGNORE INTO links "
            f"(id, type, title, url, content, note, tags, created_at, saved_at, ai_enriched) VALUES ("
            f"{esc(card_id)}, "
            f"{esc(card_type)}, "
            f"{esc(title)}, "
            f"{esc(url)}, "
            f"{esc(content)}, "
            f"{esc(note)}, "
            f"'{tags_json}', "
            f"{esc(created)}, "
            f"{esc(created)}, "
            f"0);"
        )

    lines += [""]

    with open(SQL_PATH, "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(lines))
    print(f"Wrote {len(rows) - skipped} inserts to {SQL_PATH}")
    print(f"Skipped {skipped} rows with missing id")
    print()
    print("Next step:")
    print(f"  npx wrangler d1 execute devopsmantra-db --file=scripts/migrate.sql --remote")


if __name__ == "__main__":
    main()
