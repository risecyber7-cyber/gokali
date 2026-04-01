import { HelpCircle, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NotFoundToolProps {
  searchTerm: string;
  onClear: () => void;
}

const NotFoundTool = ({ searchTerm, onClear }: NotFoundToolProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center px-4 animate-fade-in">
      <div className="w-16 h-16 rounded-2xl bg-warning/10 flex items-center justify-center mb-4">
        <HelpCircle className="w-8 h-8 text-warning" />
      </div>
      
      <h2 className="text-xl font-bold text-foreground mb-2">Tool Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-6">
        I don't recognize "<span className="text-warning font-mono">{searchTerm}</span>" as a Kali Linux tool. 
        Please check the spelling or try searching for another tool.
      </p>

      <div className="space-y-3">
        <Button
          onClick={onClear}
          variant="outline"
          className="border-primary/30 text-primary hover:bg-primary/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Browse All Tools
        </Button>
      </div>

      <div className="mt-8 p-4 bg-secondary/50 rounded-lg max-w-md">
        <p className="text-sm text-muted-foreground mb-2">
          <Search className="w-4 h-4 inline mr-1" />
          Try searching for:
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {['nmap', 'sqlmap', 'metasploit', 'hydra', 'wireshark'].map((tool) => (
            <span key={tool} className="px-2 py-1 bg-background rounded text-xs font-mono text-primary">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFoundTool;
