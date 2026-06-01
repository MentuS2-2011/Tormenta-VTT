import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = (supabaseUrl && supabaseKey)
  ? createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession:       true,        // mantém sessão no localStorage
        autoRefreshToken:     true,        // renova token automaticamente
        detectSessionInUrl:   true,
        storageKey:           'torment-vtt-session',
      },
    })
  : null