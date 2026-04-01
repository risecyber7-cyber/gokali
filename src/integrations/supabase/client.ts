import type { Session, User } from '@supabase/supabase-js';
import type { Database } from './types';

const STORAGE_KEY = 'dummy-ui-auth-user';

const buildMockUser = (email = 'demo@gokali.local'): User =>
  ({
    id: 'dummy-user-001',
    app_metadata: {},
    user_metadata: {
      full_name: 'Demo User',
    },
    aud: 'authenticated',
    created_at: new Date().toISOString(),
    email,
    role: 'authenticated',
  }) as User;

const buildMockSession = (user: User): Session =>
  ({
    access_token: 'dummy-access-token',
    refresh_token: 'dummy-refresh-token',
    expires_in: 3600,
    expires_at: Math.floor(Date.now() / 1000) + 3600,
    token_type: 'bearer',
    user,
  }) as Session;

const readSession = () => {
  const email = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
  const user = buildMockUser(email ?? 'demo@gokali.local');
  return buildMockSession(user);
};

const noOpChain = {
  select: async () => ({ data: [], error: null }),
  insert: async () => ({ data: [{ id: 'dummy-record' }], error: null }),
  update: async () => ({ data: [], error: null }),
  delete: async () => ({ data: [], error: null }),
  eq: async () => ({ data: [], error: null }),
  order: () => noOpChain,
  limit: () => noOpChain,
  single: async () => ({ data: { id: 'dummy-record' }, error: null }),
};

export const supabase = {
  auth: {
    onAuthStateChange: (callback: (event: string, session: Session | null) => void) => {
      callback('SIGNED_IN', readSession());
      return {
        data: {
          subscription: {
            unsubscribe: () => undefined,
          },
        },
      };
    },
    getSession: async () => ({ data: { session: readSession() }, error: null }),
    refreshSession: async () => ({ data: { session: readSession() }, error: null }),
    signInWithPassword: async ({ email }: { email: string; password: string }) => {
      window.localStorage.setItem(STORAGE_KEY, email);
      return { data: { session: readSession() }, error: null };
    },
    signUp: async ({ email }: { email: string; password: string; options?: unknown }) => {
      window.localStorage.setItem(STORAGE_KEY, email);
      return { data: { session: readSession() }, error: null };
    },
    signOut: async () => {
      window.localStorage.removeItem(STORAGE_KEY);
      return { error: null };
    },
    resetPasswordForEmail: async () => ({ data: {}, error: null }),
    updateUser: async () => ({ data: {}, error: null }),
    verifyOtp: async () => ({ data: {}, error: null }),
    resend: async () => ({ data: {}, error: null }),
    signInWithOtp: async () => ({ data: {}, error: null }),
    setSession: async (_tokens: unknown) => ({ data: { session: readSession() }, error: null }),
    getClaims: async () => ({ data: { claims: {} }, error: null }),
  },
  functions: {
    invoke: async (name: string, _options?: unknown) => {
      if (name === 'kali-assistant') {
        return {
          data: {
            response: 'Dummy response from the shared UI build.',
            messages_used: 22,
            monthly_limit: 100,
            bonus_credits: 0,
            total_limit: 100,
            remaining: 78,
            plan_amount: 69,
          },
          error: null,
        };
      }

      return {
        data: {
          success: true,
          message: 'Dummy integration response',
        },
        error: null,
      };
    },
  },
  from: <T extends keyof Database>(_table: T) => noOpChain,
};
