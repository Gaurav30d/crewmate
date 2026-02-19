from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.scheduler import start_trend_scheduler

app = FastAPI(title="CrewMate API", version="0.1.0")

# CORS Configuration
# Allow requests from the frontend (adjust origins as needed)
origins = [
    "http://localhost:5173",  # Vite default
    "http://127.0.0.1:5173",
    "http://localhost:8080",  # Vite custom port
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "CrewMate API is running"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

from app.api.routers import content

app.include_router(content.router, prefix="/api")

if __name__ == "__main__":
    import uvicorn
    # Start scheduler if running directly (mostly for dev)
    # in prod, scheduler might be a separate worker
    start_trend_scheduler()
    uvicorn.run(app, host="0.0.0.0", port=8000)
