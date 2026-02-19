# app/scheduler.py

import time
from app.services.trending_service import update_trends

SECONDS_IN_24_HOURS = 24 * 60 * 60


def start_trend_scheduler():
    """
    Starts the background scheduler for trend updates.
    """
    print("🚀 Trend scheduler started")

    # Run once at startup
    update_trends()

    while True:
        print("⏳ Scheduler sleeping for 24 hours...")
        time.sleep(SECONDS_IN_24_HOURS)
        update_trends()
