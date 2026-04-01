import { useEffect } from 'react';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AIUsageBadgeProps {
  refreshKey: number;
  onLimitReached: (reached: boolean) => void;
  showRechargeOnly?: boolean;
}

const AIUsageBadge = ({ onLimitReached, showRechargeOnly }: AIUsageBadgeProps) => {
  useEffect(() => {
    onLimitReached(false);
  }, [onLimitReached]);

  if (showRechargeOnly) {
    return (
      <Button size="sm" className="gap-2" disabled>
        <Zap className="h-3 w-3" />
        Demo Recharge Disabled
      </Button>
    );
  }

  return (
    <div className="mb-2 flex flex-col items-center gap-2">
      <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
        <Zap className="h-3.5 w-3.5" />
        <span className="font-medium">78 / 100 demo messages left</span>
      </div>
      <div className="h-1.5 w-48 overflow-hidden rounded-full bg-secondary">
        <div className="h-full w-[78%] rounded-full bg-primary" />
      </div>
    </div>
  );
};

export default AIUsageBadge;
