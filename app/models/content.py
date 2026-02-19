from pydantic import BaseModel, Field
from typing import List, Optional

# --- Shared Models ---

class GeneratedContent(BaseModel):
    content: str
    metadata: Optional[dict] = None

# --- Hook Generator ---

class HookRequest(BaseModel):
    topic: str
    platform: str
    tones: List[str]
    niche: Optional[str] = None

class HookResponse(BaseModel):
    hooks: List[str]

# --- Script Generator ---

class ScriptRequest(BaseModel):
    topic: str
    video_length: str = Field(..., description="e.g. '60 seconds', '15 seconds'")
    audience: str
    cta: str = Field(..., description="Call to Action")

class ScriptResponse(BaseModel):
    script: str
    
# --- Caption Generator ---

class CaptionRequest(BaseModel):
    topic: str
    platform: str
    tone: str

class CaptionResponse(BaseModel):
    captions: List[str]

# --- Idea Generator ---

class IdeaRequest(BaseModel):
    niche: str
    platform: str
    count: int = 5

class IdeaResponse(BaseModel):
    ideas: List[str]
