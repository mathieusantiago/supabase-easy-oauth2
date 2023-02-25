import { createClient, SupabaseClient } from "@supabase/supabase-js";

const configEnv= (url: string, key: string)=> {
    const supabase: SupabaseClient = createClient(
        url, //"https://wpxvwfcdmgcsvczglefh.supabase.co",
        key, //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndweHZ3ZmNkbWdjc3ZjemdsZWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcyODQ5NTIsImV4cCI6MTk5Mjg2MDk1Mn0.n84d9xUJmuxdigF8aFstFW4DRVw1dBLDx4Lb4JorMts"
      );
      return supabase;
}

export default configEnv;