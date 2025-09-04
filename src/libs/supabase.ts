/**
 * npx supabase gen types typescript \
  --project-id bntzwajyeehkzvdidjgk \
  --schema public > ./src/db/database.type.ts
 * 
 */
import 'react-native-url-polyfill/auto';

import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient, processLock } from '@supabase/supabase-js';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY!, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    lock: processLock,
  },
});
