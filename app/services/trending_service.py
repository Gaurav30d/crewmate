from threading import Lock
from datetime import datetime
from typing import List, Dict
import json
import random
import re

from app.services.ai_service import generate_ai_output
from app.db.trend_repository import init_db, save_trends, load_trends


# =========================
# In-memory cache
# =========================
TREND_CACHE = {
    "hot_topics": [],
    "trending_sounds": [],
    "last_updated": None
}

_cache_lock = Lock()

# Initialize DB on import
init_db()

# Load persisted trends into memory at startup
persisted = load_trends()
if persisted:
    with _cache_lock:
        TREND_CACHE["hot_topics"] = persisted["hot_topics"]
        TREND_CACHE["trending_sounds"] = persisted["trending_sounds"]
        TREND_CACHE["last_updated"] = persisted["last_updated"]


# =========================
# JSON extraction helper
# =========================
def extract_json_from_text(text: str):
    """
    Extracts JSON array from AI response.
    Handles markdown code fences like ```json ... ```.
    """
    try:
        cleaned = re.sub(r"```json|```", "", text, flags=re.IGNORECASE).strip()
        start = cleaned.index("[")
        end = cleaned.rindex("]") + 1
        return json.loads(cleaned[start:end])
    except Exception as e:
        print("❌ JSON extraction error:", e)
        return None


# =========================
# AI-assisted trend generation (PURE FUNCTION)
# =========================
def generate_trend_data():
    """
    Uses AI to generate trending topics and enriches them
    with backend-controlled metrics.
    """
    prompt = """
You are a trend analyst for social media platforms.

Generate 5 trending content topics for this week.

For EACH topic, return:
- title
- description
- category (Tech, Lifestyle, Education, Finance, Fitness, Entertainment)

Rules:
- Descriptions must be 1 sentence
- Do NOT add explanations
- Return ONLY a JSON array (no markdown, no text)

Format:
[
  {
    "title": "...",
    "description": "...",
    "category": "..."
  }
]
"""

    ai_response = generate_ai_output(prompt)

    # TEMP DEBUG (remove later)
    print("🧠 RAW AI RESPONSE:\n", ai_response)

    topics = extract_json_from_text(ai_response)

    if not topics:
        print("❌ Failed to extract JSON from AI response")
        return {
            "hot_topics": [],
            "trending_sounds": []
        }

    hot_topics = []
    base_views = ["850K", "1.2M", "1.8M", "2.4M", "3.1M"]
    growth_values = [45, 78, 120, 190, 260]

    for index, topic in enumerate(topics):
        hot_topics.append({
            "rank": index + 1,
            "title": topic.get("title"),
            "description": topic.get("description"),
            "category": topic.get("category"),
            "growth_percentage": growth_values[index % len(growth_values)],
            "views": base_views[index % len(base_views)],
            "time_window": "Last 7 days",
            "is_hot": index == 0
        })

    trending_sounds = [
        {
            "name": "Original sound - trending beat",
            "uses": "1.1M",
            "growth_percentage": random.randint(30, 90)
        },
        {
            "name": "POV transition audio",
            "uses": "820K",
            "growth_percentage": random.randint(40, 110)
        }
    ]

    return {
        "hot_topics": hot_topics,
        "trending_sounds": trending_sounds
    }


# =========================
# Background update function (CALLED BY SCHEDULER)
# =========================
def update_trends():
    print("🔄 Updating trends...")

    data = generate_trend_data()
    now = datetime.utcnow()

    with _cache_lock:
        TREND_CACHE["hot_topics"] = data["hot_topics"]
        TREND_CACHE["trending_sounds"] = data["trending_sounds"]
        TREND_CACHE["last_updated"] = now

    save_trends(
        hot_topics=data["hot_topics"],
        trending_sounds=data["trending_sounds"],
        last_updated=now
    )

    print("✅ Trends updated & persisted at", now)



# =========================
# Read-only accessors
# =========================
def get_hot_topics_this_week() -> List[Dict]:
    with _cache_lock:
        return TREND_CACHE["hot_topics"].copy()


def get_trending_sounds() -> List[Dict]:
    with _cache_lock:
        return TREND_CACHE["trending_sounds"].copy()


# =========================
# Local backend-only test
# =========================
if __name__ == "__main__":
    #update_trends()
    print(get_hot_topics_this_week())
    print("\n🧪 READ TEST:")
    for topic in get_hot_topics_this_week():
        print("-", topic["title"])
