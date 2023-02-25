import { createClient, SupabaseClient } from "@supabase/supabase-js";

const configEnv = (url: string, key: string) => {
  const supabase: SupabaseClient = createClient(url, key);
  return supabase;
};

export default configEnv;
