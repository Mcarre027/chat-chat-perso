import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

import { ApiConfig } from '@/types/app';

export const runtime = 'edge';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    const {
        messages,
        config,
        stream,
    }: {
        messages: any[];
        config: ApiConfig;
        stream: boolean;
    } = await req.json();

    const venice = new OpenAI({
        apiKey: config.provider?.apiKey ?? process.env.VENICE_API_KEY ?? '',
        baseURL: config.provider?.endpoint ?? process.env.VENICE_ENDPOINT ?? 'https://api.venice.ai/api/v1',
    });

    const response = await venice.chat.completions.create({
        model: config.model.model_id,
        stream: true,
        max_tokens: 4096,
        messages,
    });

    const output = OpenAIStream(response);

    return new StreamingTextResponse(output);
}
