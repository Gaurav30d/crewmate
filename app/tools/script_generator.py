from app.services.ai_service import generate_ai_output

def build_script_prompt(
    topic: str,
    video_length: str,
    audience: str,
    cta: str
) -> str:
    prompt = f"""
You are an expert video script writer for short-form social media content.

Your task is to write a complete, engaging video script based on the following details:

VIDEO DETAILS:
- Topic: {topic}
- Video Length: {video_length}
- Target Audience: {audience}
- Call To Action: {cta}

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

    return prompt.strip()

def generate_script(
    topic: str,
    video_length: str,
    audience: str,
    cta: str
) -> str:
    """
    Generates raw video script based on UI inputs.
    """
    prompt = build_script_prompt(
        topic=topic,
        video_length=video_length,
        audience=audience,
        cta=cta
    )

    output = generate_ai_output(prompt)
    return output

if __name__ == "__main__":
    print(
        generate_script(
            topic="How creators can save 2 hours daily using AI tools",
            video_length="60 seconds",
            audience="Beginner content creators",
            cta="Follow"
        )
    )
