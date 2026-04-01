import { useMemo } from 'react';

const mockSubscription = {
  id: 'dummy-subscription-001',
  status: 'active',
  starts_at: '2026-01-01T00:00:00.000Z',
  expires_at: '2026-12-31T23:59:59.000Z',
  amount: 399,
};

export const useSubscription = () => {
  return useMemo(() => ({
    hasActiveSubscription: true,
    subscription: mockSubscription,
    loading: false,
    refreshSubscription: async () => mockSubscription,
  }), []);
};
