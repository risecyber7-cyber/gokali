import { Copy, Check, Terminal, Download, BookOpen, Play, FileOutput, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import { KaliTool } from '@/data/kaliTools';
import CommandsTable from './CommandsTable';
import WarningBanner from './WarningBanner';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface ToolDetailProps {
  tool: KaliTool;
}

const ToolDetail = ({ tool }: ToolDetailProps) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: "Copied!",
      description: "Command copied to clipboard",
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  const CodeBlock = ({ code, field }: { code: string; field: string }) => (
    <div className="terminal-block group relative">
      <code className="break-all text-primary">{code}</code>
      <button
        onClick={() => copyToClipboard(code, field)}
        className="absolute right-2 top-2 rounded-xl bg-secondary/70 p-1.5 opacity-0 transition-colors group-hover:opacity-100 hover:bg-primary/20"
        title="Copy"
      >
        {copiedField === field ? (
          <Check className="w-4 h-4 text-success" />
        ) : (
          <Copy className="w-4 h-4 text-muted-foreground" />
        )}
      </button>
    </div>
  );

  const SectionHeader = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
    <div className="flex items-center gap-2 mb-3">
      <div className="rounded-xl border border-primary/15 bg-primary/10 p-2">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <h3 className="font-semibold text-foreground">{title}</h3>
    </div>
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="premium-panel cyber-card p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="mb-3 inline-flex items-center rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Tool Intelligence
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-mono text-foreground text-glow">
              {tool.name}
            </h2>
            <p className="mt-2 max-w-3xl text-muted-foreground">{tool.shortDescription}</p>
          </div>
          <span className="category-pill">{tool.category}</span>
        </div>
      </div>

      {/* Description */}
      <div className="cyber-card p-4">
        <SectionHeader icon={BookOpen} title="Description" />
        <p className="text-foreground/90 leading-relaxed">{tool.fullDescription}</p>
      </div>

      {/* Installation */}
      <div className="cyber-card p-4">
        <SectionHeader icon={Download} title="Installation / Check" />
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Check if installed:</p>
            <CodeBlock code={tool.checkCommand} field="check" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Install command:</p>
            <CodeBlock code={tool.installCommand} field="install" />
          </div>
        </div>
      </div>

      {/* Basic Syntax */}
      <div className="cyber-card p-4">
        <SectionHeader icon={Terminal} title="Basic Syntax" />
        <CodeBlock code={tool.basicSyntax} field="syntax" />
      </div>

      {/* Commands Table */}
      <div className="cyber-card p-4">
        <SectionHeader icon={Play} title="Common Commands" />
        <CommandsTable commands={tool.commands} />
      </div>

      {/* Step by Step */}
      <div className="cyber-card p-4">
        <SectionHeader icon={BookOpen} title="Step-by-Step Guide" />
        <ol className="space-y-2">
          {tool.stepByStep.map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className={cn(
                "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                "bg-primary/20 text-primary border border-primary/30"
              )}>
                {index + 1}
              </span>
              <span className="text-foreground/90 pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Output Explanation */}
      <div className="cyber-card p-4">
        <SectionHeader icon={FileOutput} title="Understanding the Output" />
        <p className="text-foreground/90 leading-relaxed">{tool.outputExplanation}</p>
      </div>

      {/* Warnings */}
      <WarningBanner warnings={tool.warnings} />
    </div>
  );
};

export default ToolDetail;
