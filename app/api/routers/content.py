from fastapi import APIRouter, Depends
from app.api.deps import get_current_user
from app.services.generator_service import ContentGenerator
from app.models.content import (
    HookRequest, HookResponse,
    ScriptRequest, ScriptResponse,
    CaptionRequest, CaptionResponse,
    IdeaRequest, IdeaResponse
)

router = APIRouter(prefix="/generate", tags=["Content Generation"])

@router.post("/hook", response_model=HookResponse)
def generate_hook(request: HookRequest, user: dict = Depends(get_current_user)):
    hooks = ContentGenerator.generate_hooks(request)
    return HookResponse(hooks=hooks)

@router.post("/script", response_model=ScriptResponse)
def generate_script(request: ScriptRequest, user: dict = Depends(get_current_user)):
    script = ContentGenerator.generate_script(request)
    return ScriptResponse(script=script)

@router.post("/caption", response_model=CaptionResponse)
def generate_caption(request: CaptionRequest, user: dict = Depends(get_current_user)):
    captions = ContentGenerator.generate_captions(request)
    return CaptionResponse(captions=captions)

@router.post("/idea", response_model=IdeaResponse)
def generate_idea(request: IdeaRequest, user: dict = Depends(get_current_user)):
    ideas = ContentGenerator.generate_ideas(request)
    return IdeaResponse(ideas=ideas)
