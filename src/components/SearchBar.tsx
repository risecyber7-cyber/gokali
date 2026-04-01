import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

const SearchBar = ({ value, onChange, onSearch }: SearchBarProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="relative group">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 blur-xl opacity-0 transition-opacity group-focus-within:opacity-100" />
      <div className="relative flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search module, exploit, or command signature"
            className="h-12 rounded-2xl border-primary/15 bg-card/80 pl-10 pr-10 font-mono text-sm shadow-[0_14px_35px_hsl(224_40%_2%/0.2)] focus:border-primary/50 focus:ring-primary/20"
          />
          {value && (
            <button
              onClick={() => onChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <Button
          onClick={onSearch}
          className="neon-glow h-12 rounded-2xl bg-gradient-to-r from-primary via-accent to-warning px-5 text-primary-foreground hover:opacity-95"
        >
          Scan
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
