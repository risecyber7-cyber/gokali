import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import type { Session, User } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<{ error: Error | null }>;
  resetPassword: (email: string) => Promise<{ error: Error | null }>;
  updatePassword: (newPassword: string) => Promise<{ error: Error | null }>;
  verifyOtp: (email: string, token: string) => Promise<{ error: Error | null }>;
  resendOtp: (email: string) => Promise<{ error: Error | null }>;
}

const STORAGE_KEY = 'dummy-ui-auth-user';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const buildMockUser = (email: string, fullName?: string): User =>
  ({
    id: 'dummy-user-001',
    app_metadata: {},
    user_metadata: {
      full_name: fullName ?? 'Demo User',
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

const readStoredUser = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const email = window.localStorage.getItem(STORAGE_KEY);
  return email ? buildMockUser(email) : null;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = readStoredUser() ?? buildMockUser('demo@gokali.local');
    window.localStorage.setItem(STORAGE_KEY, storedUser.email ?? 'demo@gokali.local');
    setUser(storedUser);
    setSession(buildMockSession(storedUser));
    setLoading(false);
  }, []);

  const value = useMemo<AuthContextType>(() => ({
    user,
    session,
    loading,
    signUp: async (email, _password, fullName) => {
      const nextUser = buildMockUser(email, fullName);
      window.localStorage.setItem(STORAGE_KEY, email);
      setUser(nextUser);
      setSession(buildMockSession(nextUser));
      return { error: null };
    },
    signIn: async (email) => {
      const nextUser = buildMockUser(email);
      window.localStorage.setItem(STORAGE_KEY, email);
      setUser(nextUser);
      setSession(buildMockSession(nextUser));
      return { error: null };
    },
    signOut: async () => {
      window.localStorage.removeItem(STORAGE_KEY);
      setUser(null);
      setSession(null);
      return { error: null };
    },
    resetPassword: async () => ({ error: null }),
    updatePassword: async () => ({ error: null }),
    verifyOtp: async () => ({ error: null }),
    resendOtp: async () => ({ error: null }),
  }), [loading, session, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
