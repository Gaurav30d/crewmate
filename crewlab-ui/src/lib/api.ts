import { supabase } from '@/integrations/supabase/client';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const getAuthHeaders = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.access_token) {
        throw new Error('User not authenticated');
    }
    return {
        'Authorization': `Bearer ${session.access_token}`,
        'Content-Type': 'application/json',
    };
};

export const api = {
    // HOOKS
    generateHooks: async (data: { topic: str; platform: str; tones: string[]; niche?: string }) => {
        const headers = await getAuthHeaders();
        const response = await fetch(`${API_URL}/api/generate/hook`, {
            method: 'POST',
            headers,
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to generate hooks');
        return response.json();
    },

    // SCRIPTS
    generateScript: async (data: { topic: string; video_length: string; audience: string; cta: string }) => {
        const headers = await getAuthHeaders();
        const response = await fetch(`${API_URL}/api/generate/script`, {
            method: 'POST',
            headers,
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to generate script');
        return response.json();
    },

    // CAPTIONS
    generateCaptions: async (data: { topic: string; platform: string; tone: string }) => {
        const headers = await getAuthHeaders();
        const response = await fetch(`${API_URL}/api/generate/caption`, {
            method: 'POST',
            headers,
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to generate captions');
        return response.json();
    },

    // IDEAS
    generateIdeas: async (data: { niche: string; platform: string; count?: number }) => {
        const headers = await getAuthHeaders();
        const response = await fetch(`${API_URL}/api/generate/idea`, {
            method: 'POST',
            headers,
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to generate ideas');
        return response.json();
    }
};
