import { AlertTriangle, ShieldAlert } from 'lucide-react';

interface WarningBannerProps {
  warnings: string[];
}

const WarningBanner = ({ warnings }: WarningBannerProps) => {
  return (
    <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-destructive/20 rounded-lg flex-shrink-0">
          <ShieldAlert className="w-5 h-5 text-destructive" />
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-destructive flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Important Warnings
          </h4>
          <ul className="space-y-1.5">
            {warnings.map((warning, index) => (
              <li key={index} className="text-sm text-destructive/90 flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>{warning}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-destructive/20">
            <p className="text-xs text-destructive/80 font-medium">
              ⚠️ Use Kali Linux tools only on systems you own or have written permission to test. 
              Unauthorized hacking is illegal and can result in criminal charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningBanner;
