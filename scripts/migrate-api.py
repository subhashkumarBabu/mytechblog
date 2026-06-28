"""
Migrates cards.csv to D1 via Cloudflare REST API using parameterized queries.
No SQL escaping needed — params are sent as JSON.
"""

import csv
import json
import sys
import urllib.request
import urllib.error
from pathlib import Path

ACCOUNT_ID = "ff70d1b4233c331a47b566f849c3358a"
DB_ID      = "fb069652-3d6c-4d55-8533-f75860631b3c"
TOKEN      = "cfoat__AoMghF6uOXJBUyjkUCcCYZNFqwQnjMSUlsDG8vE7iU.OwNxcOtVgyzpe4fjoD5T4cRK-m4QrJHGKXguYE6EmL0"

CSV_PATH = Path(__file__).parent.parent.parent / "mymind" / "cards.csv"

QUERY_URL = (
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}"
    f"/d1/database/{DB_ID}/query"
)

SQL = (
    "INSERT OR IGNORE INTO links "
    "(id, type, title, url, content, note, tags, created_at, saved_at, ai_enriched) "
    "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
)


def parse_tags(raw: str) -> str:
    if not raw or not raw.strip():
        return "[]"
    tags = [t.strip() for t in raw.split(",") if t.strip()]
    return json.dumps(tags)


def post_query(sql: str, params: list) -> dict:
    body = json.dumps({"sql": sql, "params": params}).encode("utf-8")
    req = urllib.request.Request(
        QUERY_URL,
        data=body,
        headers={
            "Authorization": f"Bearer {TOKEN}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read())


def main():
    if not CSV_PATH.exists():
        print(f"ERROR: cards.csv not found at {CSV_PATH}", file=sys.stderr)
        sys.exit(1)

    rows = []
    with open(CSV_PATH, newline="", encoding="utf-8") as f:
        for row in csv.DictReader(f):
            card_id   = row.get("id", "").strip()
            card_type = row.get("type", "WebPage").strip() or "WebPage"
            title     = row.get("title", "").strip() or None
            url       = row.get("url", "").strip() or None
            content   = row.get("content", "").strip() or None
            note      = row.get("note", "").strip() or None
            tags      = parse_tags(row.get("tags", ""))
            created   = row.get("created", "").strip()

            if not card_id:
                continue

            if content and len(content) > 5000:
                content = content[:5000]

            if not title and content:
                title = content.strip().split("\n")[0][:200] or None

            rows.append([card_id, card_type, title, url, content, note, tags, created, created, 0])

    print(f"Loaded {len(rows)} cards — inserting one by one...")

    total = 0
    for i, row in enumerate(rows, 1):
        try:
            result = post_query(SQL, row)
            if not result.get("success"):
                print(f"\nRow {i} FAILED (id={row[0]}): {result.get('errors')}")
                sys.exit(1)
            total += 1
            if i % 50 == 0 or i == len(rows):
                print(f"  {i}/{len(rows)} inserted")
        except urllib.error.HTTPError as e:
            print(f"\nRow {i} HTTP {e.code} (id={row[0]}): {e.read().decode()}")
            sys.exit(1)
        except Exception as e:
            print(f"\nRow {i} error (id={row[0]}): {e}")
            sys.exit(1)

    print(f"\nDone — {total} cards migrated to D1")


if __name__ == "__main__":
    main()
