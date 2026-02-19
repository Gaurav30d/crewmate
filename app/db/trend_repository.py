import sqlite3
import json
from datetime import datetime
from pathlib import Path

DB_PATH = Path(__file__).parent / "trends.db"


def get_connection():
    return sqlite3.connect(DB_PATH)


def init_db():
    with get_connection() as conn:
        conn.execute("""
        CREATE TABLE IF NOT EXISTS trends (
            id INTEGER PRIMARY KEY,
            hot_topics TEXT,
            trending_sounds TEXT,
            last_updated TEXT
        )
        """)

def save_trends(hot_topics, trending_sounds, last_updated):
    with get_connection() as conn:
        conn.execute("DELETE FROM trends")  # keep only latest snapshot
        conn.execute(
            """
            INSERT INTO trends (hot_topics, trending_sounds, last_updated)
            VALUES (?, ?, ?)
            """,
            (
                json.dumps(hot_topics),
                json.dumps(trending_sounds),
                last_updated.isoformat()
            )
        )
        conn.commit()


def load_trends():
    with get_connection() as conn:
        cur = conn.execute(
            "SELECT hot_topics, trending_sounds, last_updated FROM trends LIMIT 1"
        )
        row = cur.fetchone()

        if not row:
            return None

        return {
            "hot_topics": json.loads(row[0]),
            "trending_sounds": json.loads(row[1]),
            "last_updated": row[2]
        }
