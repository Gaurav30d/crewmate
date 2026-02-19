from app.services.ai_service import generate_ai_output

def build_caption_prompt(
    context: str,
    platform: str,
    styles: list[str],
    hashtag_count: int
) -> str:
    style_text = ", ".join(styles)

    prompt = f"""
You are an expert social media copywriter who writes high-engagement captions for {platform}.

Your task is to generate ONE caption based on the following details:

CONTENT CONTEXT:
{context}

PLATFORM:
{platform}

CAPTION STYLE:
{style_text}

CAPTION GUIDELINES:
- Match the selected caption styles closely
- Use natural, platform-native language
- Keep it engaging and easy to read
- Include a subtle call-to-action if appropriate
- Do NOT explain the caption
- Do NOT include markdown formatting

HASHTAGS:
- Add exactly {hashtag_count} relevant hashtags
- Hashtags must be specific and meaningful

OUTPUT FORMAT:
- Return only the caption text
- Caption first, hashtags at the end
- No extra text before or after
"""

    return prompt.strip()


def generate_caption(
    context: str,
    platform: str,
    styles: list[str],
    hashtag_count: int
) -> str:
    """
    Generates raw caption text based on UI inputs.
    """
    prompt = build_caption_prompt(
        context=context,
        platform=platform,
        styles=styles,
        hashtag_count=hashtag_count
    )

    output = generate_ai_output(prompt)
    return output


if __name__ == "__main__":
    print(
        generate_caption(
            context="Reel about how creators can save time using AI tools",
            platform="Instagram",
            styles=["Short & Punchy", "Educational"],
            hashtag_count=5
        )
    )
