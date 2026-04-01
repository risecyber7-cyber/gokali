import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { ToolCommand } from '@/data/kaliTools';
import RiskBadge from './RiskBadge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { toast } from '@/hooks/use-toast';

interface CommandsTableProps {
  commands: ToolCommand[];
}

const CommandsTable = ({ commands }: CommandsTableProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyCommand = async (command: string, index: number) => {
    await navigator.clipboard.writeText(command);
    setCopiedIndex(index);
    toast({
      title: "Command copied!",
      description: "Paste it in your terminal",
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="border-border hover:bg-transparent">
            <TableHead className="text-primary font-mono text-xs">Command</TableHead>
            <TableHead className="text-primary font-mono text-xs">What it does</TableHead>
            <TableHead className="text-primary font-mono text-xs hidden md:table-cell">When to use</TableHead>
            <TableHead className="text-primary font-mono text-xs text-center">Risk</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {commands.map((cmd, index) => (
            <TableRow key={index} className="border-border hover:bg-primary/5 group">
              <TableCell className="font-mono text-xs md:text-sm">
                <div className="flex items-start gap-2">
                  <code className="bg-background px-2 py-1 rounded text-cyber-green break-all">
                    {cmd.command}
                  </code>
                  <button
                    onClick={() => copyCommand(cmd.command, index)}
                    className="p-1 rounded hover:bg-primary/20 transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0"
                    title="Copy command"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-3.5 h-3.5 text-success" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </TableCell>
              <TableCell className="text-sm text-foreground/90">{cmd.description}</TableCell>
              <TableCell className="text-sm text-muted-foreground hidden md:table-cell">{cmd.whenToUse}</TableCell>
              <TableCell className="text-center">
                <RiskBadge level={cmd.riskLevel} showLabel={false} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CommandsTable;
