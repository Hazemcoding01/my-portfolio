import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ummbovllidagdjbqonsc.supabase.co';
const SUPABASE_KEY = 'sb_publishable_uvkEPlLZpejFps-LVnnikg_VHYxdt7K';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const HASHED_PASSWORD = '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4';

export async function hashPassword(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const buf = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '<',
    '>': '>',
    '"': '"',
    "'": '&#039;'
  }[char]));
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('ar-EG', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}
