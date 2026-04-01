const STORAGE_KEY = 'dummy-ui-auth-user';

type SignInOptions = {
  redirect_uri?: string;
  extraParams?: Record<string, string>;
};

export const lovable = {
  auth: {
    signInWithOAuth: async (_provider: 'google' | 'apple', opts?: SignInOptions) => {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, 'demo@gokali.local');
        window.location.assign(opts?.redirect_uri ?? window.location.origin);
      }

      return { redirected: true, error: null };
    },
  },
};
