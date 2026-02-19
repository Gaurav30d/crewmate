from app.services.ai_service import generate_ai_output
from app.models.content import HookRequest, ScriptRequest, CaptionRequest, IdeaRequest

class ContentGenerator:
    
    @staticmethod
    def generate_hooks(request: HookRequest) -> list[str]:
        tone_text = ", ".join(request.tones)
        prompt = f"""
You are an expert social media growth strategist who specializes in writing viral hooks for {request.platform}.

Your task is to generate EXACTLY 3 high-performing hooks that are designed to stop scrolling and maximize engagement.

CONTENT DETAILS:
- Topic: {request.topic}
- Platform: {request.platform}
- Tone: {tone_text}
"""
        if request.niche:
            prompt += f"- Target Niche/Audience: {request.niche}\n"

        prompt += """
HOOK REQUIREMENTS:
- Each hook must be 1–2 short sentences only
- Use curiosity, bold statements, or relatable pain points
- Do NOT explain the hook
- Do NOT add titles, numbering, or bullet points
- Do NOT include markdown formatting (*, **, etc.)
- Emojis are allowed only if they enhance engagement (max 1 per hook)

OUTPUT FORMAT:
- Return only the 3 hooks
- Each hook on a new line
- No extra text before or after
"""
        raw_output = generate_ai_output(prompt)
        # Simple splitting by newline and cleaning
        hooks = [h.strip() for h in raw_output.split('\n') if h.strip()]
        return hooks

    @staticmethod
    def generate_script(request: ScriptRequest) -> str:
        prompt = f"""
You are an expert video script writer for short-form social media content.

Your task is to write a complete, engaging video script based on the following details:

VIDEO DETAILS:
- Topic: {request.topic}
- Video Length: {request.video_length}
- Target Audience: {request.audience}
- Call To Action: {request.cta}

SCRIPT STRUCTURE:
- Start with a strong hook in the first line
- Deliver value clearly and concisely
- Keep language simple and conversational
- End naturally with the selected call to action

SCRIPT GUIDELINES:
- Match the attention span of the given video length
- Do NOT include scene directions or timestamps
- Do NOT explain the script
- Write as if the creator is speaking directly to the camera

OUTPUT FORMAT:
- Return only the script text
- Use short paragraphs for readability
- No extra text before or after
"""
        return generate_ai_output(prompt).strip()

    @staticmethod
    def generate_captions(request: CaptionRequest) -> list[str]:
        prompt = f"""
Write 3 engaging social media captions for a post about "{request.topic}" on {request.platform}.
Tone: {request.tone}.

Requirements:
- Include relevant hashtags.
- Add line breaks for readability.
- Return ONLY the 3 captions separated by "---".
"""
        raw_output = generate_ai_output(prompt)
        captions = [c.strip() for c in raw_output.split('---') if c.strip()]
        return captions

    @staticmethod
    def generate_ideas(request: IdeaRequest) -> list[str]:
        prompt = f"""
Generate {request.count} viral content ideas for the niche "{request.niche}" on {request.platform}.
Return only the ideas as a list, one per line. No numbering.
"""
        raw_output = generate_ai_output(prompt)
        ideas = [i.strip() for i in raw_output.split('\n') if i.strip()]
        return ideas
