from app.services.ai_service import generate_ai_output

print("hook_generator file loaded")


def build_hook_prompt(
    topic: str,
    platform: str,
    tones: list[str],
    niche: str | None = None
) -> str:
    tone_text = ", ".join(tones)

    prompt = f"""
You are an expert social media growth strategist who specializes in writing viral hooks for {platform}.

Your task is to generate EXACTLY 3 high-performing hooks that are designed to stop scrolling and maximize engagement.

CONTENT DETAILS:
- Topic: {topic}
- Platform: {platform}
- Tone: {tone_text}
"""

    if niche:
        prompt += f"- Target Niche/Audience: {niche}\n"

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

    return prompt.strip()


def generate_hooks(
    topic: str,
    platform: str,
    tones: list[str],
    niche: str | None = None
) -> str:
    """
    Generates raw AI hooks based on UI inputs.
    """
    prompt = build_hook_prompt(
        topic=topic,
        platform=platform,
        tones=tones,
        niche=niche
    )

    output = generate_ai_output(prompt)
    return output


if __name__ == "__main__":
    print("main block running")
    print(
        generate_hooks(
            topic="productivity tips for creators",
            platform="Instagram Reels",
            tones=["Casual", "Bold"],
            niche="Tech Creators"
        )
    )
