import { useState } from 'react';
import { ChevronDown, ChevronRight, Folder, FileCode } from 'lucide-react';
import { categories, kaliTools, KaliTool } from '@/data/kaliTools';
import { cn } from '@/lib/utils';

interface ToolListProps {
  selectedTool: string | null;
  onSelectTool: (toolId: string) => void;
  searchResults: KaliTool[];
  isSearching: boolean;
}

const ToolList = ({ selectedTool, onSelectTool, searchResults, isSearching }: ToolListProps) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['Information Gathering']));

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const getToolsByCategory = (category: string) => {
    return kaliTools.filter(tool => tool.category === category);
  };

  if (isSearching) {
    return (
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground mb-2 px-2">
          {searchResults.length} module{searchResults.length !== 1 ? 's' : ''} detected
        </p>
        {searchResults.map((tool, index) => (
          <button
            key={tool.id}
            onClick={() => onSelectTool(tool.id)}
            className={cn(
              "w-full animate-fade-in rounded-xl border px-3 py-2.5 text-left transition-all",
              "flex items-center gap-2 border-transparent hover:border-primary/15 hover:bg-primary/10 hover:text-primary",
              selectedTool === tool.id 
                ? "border-primary/25 bg-primary/15 text-primary shadow-[0_10px_30px_hsl(var(--primary)/0.08)]" 
                : "text-foreground"
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <FileCode className="w-4 h-4 flex-shrink-0" />
            <div className="min-w-0">
              <span className="font-mono text-sm block truncate">{tool.name}</span>
              <span className="text-xs text-muted-foreground block truncate">{tool.category}</span>
            </div>
          </button>
        ))}
        {searchResults.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <p className="text-sm">No matching module found</p>
            <p className="text-xs mt-1">Try a different signature</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {categories.map((category) => {
        const tools = getToolsByCategory(category);
        const isExpanded = expandedCategories.has(category);
        const hasSelectedTool = tools.some(t => t.id === selectedTool);

        return (
          <div key={category}>
            <button
              onClick={() => toggleCategory(category)}
              className={cn(
                "flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left transition-all",
                "border border-transparent hover:border-primary/10 hover:bg-secondary/55",
                hasSelectedTool && "text-primary"
              )}
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 flex-shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              )}
              <Folder className={cn(
                "w-4 h-4 flex-shrink-0",
                isExpanded ? "text-primary" : "text-muted-foreground"
              )} />
              <span className="text-sm font-medium truncate">{category}</span>
              <span className="text-xs text-muted-foreground ml-auto">({tools.length})</span>
            </button>
            
            {isExpanded && (
              <div className="mt-2 ml-4 space-y-1 border-l border-border/50 pl-3">
                {tools.map((tool, index) => (
                  <button
                    key={tool.id}
                    onClick={() => onSelectTool(tool.id)}
                    className={cn(
                      "flex w-full animate-fade-in items-center gap-2 rounded-xl border px-3 py-2 text-left transition-all",
                      "border-transparent hover:border-primary/10 hover:bg-primary/10 hover:text-primary",
                      selectedTool === tool.id 
                        ? "border-primary/20 bg-primary/15 text-primary" 
                        : "text-secondary-foreground"
                    )}
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <FileCode className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="font-mono text-sm truncate">{tool.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ToolList;
