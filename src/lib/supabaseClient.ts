import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient;

export function getSupabaseClient() {
  if (!supabase) {
    // Keys hardcodeadas directamente
    const url = 'https://jblibgbxfqbyinkvlgsk.supabase.co';
    const key = 'sb_publishable_YO1Ch0EZuCOAl_DKHlPExw_SAe9ERHj';
    
    supabase = createClient(url, key);
    console.log('✅ Inicializando Supabase con keys hardcodeadas');
  }

  return supabase;
}