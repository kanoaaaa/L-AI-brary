import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    // Fetch response from OpenAI API
    const openAiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // Use the API key from .env
      },
      body: JSON.stringify({
        model: 'gpt-4', // Use the GPT-4 model as preferred
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: 200, // Adjust token limit as needed
        temperature: 0.7, // Adjust creativity level
      }),
    });

    if (!openAiResponse.ok) {
      throw new Error(`OpenAI API Error: ${openAiResponse.statusText}`);
    }

    const data = await openAiResponse.json();

    // Return the response text
    return NextResponse.json({ text: data.choices[0].message.content.trim() });
  } catch (error) {
    console.error('Error in ChatGPT API:', error);
    return NextResponse.json({ error: 'Failed to fetch response from OpenAI' }, { status: 500 });
  }
}
