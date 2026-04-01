import { AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { RiskLevel } from '@/data/kaliTools';
import { cn } from '@/lib/utils';

interface RiskBadgeProps {
  level: RiskLevel;
  showLabel?: boolean;
}

const RiskBadge = ({ level, showLabel = true }: RiskBadgeProps) => {
  const config = {
    low: {
      icon: Info,
      label: 'Low Risk',
      className: 'risk-low border',
    },
    medium: {
      icon: AlertCircle,
      label: 'Medium Risk',
      className: 'risk-medium border',
    },
    high: {
      icon: AlertTriangle,
      label: 'High Risk',
      className: 'risk-high border',
    },
  };

  const { icon: Icon, label, className } = config[level];

  return (
    <span className={cn(
      "inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium",
      className
    )}>
      <Icon className="w-3 h-3" />
      {showLabel && <span>{label}</span>}
    </span>
  );
};

export default RiskBadge;
