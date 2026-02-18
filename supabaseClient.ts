import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jblibgbxfqbyinkvlgsk.supabase.co';
const supabaseKey = 'sb_publishable_YO1Ch0EZuCOAl_DKHlPExw_SAe9ERHj';

export const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL!,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY!
);
