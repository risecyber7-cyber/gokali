import { ReactNode } from 'react';
import { BadgeAlert } from 'lucide-react';

interface SubscriptionGateProps {
  children: ReactNode;
}

const SubscriptionGate = ({ children }: SubscriptionGateProps) => {
  return (
    <div className="relative min-h-screen">
      <div className="border-b border-primary/20 bg-primary/8 px-4 py-3 text-center text-xs font-mono uppercase tracking-[0.2em] text-primary">
        <span className="inline-flex items-center gap-2">
          <BadgeAlert className="h-4 w-4" />
          Dummy UI Mode Only
        </span>
        <span className="ml-2 text-muted-foreground normal-case tracking-normal">
          Payments, subscriptions, promo codes, and backend access are mocked.
        </span>
      </div>
      {children}
    </div>
  );
};

export default SubscriptionGate;
