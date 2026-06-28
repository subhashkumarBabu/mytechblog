-- devopsmantra.com — D1 schema
-- Run: wrangler d1 execute devopsmantra-db --file=schema.sql

CREATE TABLE IF NOT EXISTS links (
  id            TEXT PRIMARY KEY,              -- mymind id or nanoid for new saves
  type          TEXT NOT NULL DEFAULT 'WebPage', -- Article | Repository | WebPage | Note | Document | Tweet
  title         TEXT,
  url           TEXT,
  content       TEXT,                          -- archived text (null if stored in R2)
  r2_key        TEXT,                          -- R2 object key when content > 10KB
  note          TEXT,                          -- user micro-annotation
  summary       TEXT,                          -- AI-generated summary
  tags          TEXT NOT NULL DEFAULT '[]',    -- JSON array e.g. ["SRE","kubernetes"]
  created_at    TEXT NOT NULL,                 -- original creation time (ISO 8601)
  saved_at      TEXT NOT NULL DEFAULT (datetime('now')), -- when added to this platform
  is_read       INTEGER NOT NULL DEFAULT 0,
  read_at       TEXT,
  review_count  INTEGER NOT NULL DEFAULT 0,
  last_reviewed_at TEXT,
  next_review_at   TEXT,                       -- null = not scheduled; ISO date
  ai_enriched   INTEGER NOT NULL DEFAULT 0     -- 0 = pending, 1 = done
);

-- Streak / daily activity tracking
CREATE TABLE IF NOT EXISTS activity (
  date              TEXT PRIMARY KEY,           -- YYYY-MM-DD
  links_saved       INTEGER NOT NULL DEFAULT 0,
  links_reviewed    INTEGER NOT NULL DEFAULT 0
);

-- Indexes for common access patterns
CREATE INDEX IF NOT EXISTS idx_links_created    ON links (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_links_type       ON links (type);
CREATE INDEX IF NOT EXISTS idx_links_next_review ON links (next_review_at);
CREATE INDEX IF NOT EXISTS idx_links_unread     ON links (is_read, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_links_ai_pending ON links (ai_enriched) WHERE ai_enriched = 0;
