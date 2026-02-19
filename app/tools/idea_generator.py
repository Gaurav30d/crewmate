from app.services.ai_service import generate_ai_output

def build_idea_prompt(
    niche: str,
    platform: str,
    content_types: list[str]
) -> str:
    content_type_text = ", ".join(content_types)

    prompt = f"""
You are a content strategist who specializes in generating viral content ideas for {platform}.

Your task is to generate 5 strong content ideas based on the following details:

CONTENT DETAILS:
- Niche: {niche}
- Platform: {platform}
- Content Types: {content_type_text}

IDEA GUIDELINES:
- Ideas should be creator-friendly and easy to execute
- Match the selected content types closely
- Avoid explanations or long descriptions
- Do not include numbering or bullet points
- Each idea should be concise but clear

OUTPUT FORMAT:
- Return only the ideas
- One idea per line
- No extra text before or after
"""

    return prompt.strip()


def generate_ideas(
    niche: str,
    platform: str,
    content_types: list[str]
) -> str:
    """
    Generates raw content ideas based on UI inputs.
    """
    prompt = build_idea_prompt(
        niche=niche,
        platform=platform,
        content_types=content_types
    )

    output = generate_ai_output(prompt)
    return output

if __name__ == "__main__":
    print(
        generate_ideas(
            niche="Tech reviews",
            platform="Instagram Reels",
            content_types=["Educational", "Tutorial", "Trends"]
        )
    )
