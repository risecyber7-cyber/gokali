import { Terminal, Shield, Search, BookOpen, Bot, Radio } from 'lucide-react';

const EmptyState = () => {
  return (
    <div className="hud-panel hud-outline hud-grid flex min-h-[460px] flex-col items-center justify-center rounded-[2rem] px-4 py-10 text-center">
      <div className="relative mb-6">
        <div className="jarvis-orb flex h-28 w-28 items-center justify-center">
          <Terminal className="h-11 w-11 text-primary" />
        </div>
        <Shield className="absolute -bottom-2 -right-2 h-8 w-8 text-accent/80" />
      </div>

      <div className="hud-chip mb-3">
        <Radio className="h-3.5 w-3.5" />
        Awaiting Input
      </div>
      <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">Select a Module to Brief the System</h2>
      <p className="mb-8 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
        Search the registry, open a command reference, or activate an assistant module from this Jarvis-style operations deck.
      </p>

      <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
        <div className="hud-panel rounded-[1.6rem] p-5 text-left">
          <Search className="mb-3 h-5 w-5 text-primary" />
          <h4 className="mb-1 text-sm font-semibold text-foreground">Query Tool Registry</h4>
          <p className="text-xs leading-6 text-muted-foreground">
            Type a tool name like "nmap", "sqlmap", or "metasploit".
          </p>
        </div>
        <div className="hud-panel rounded-[1.6rem] p-5 text-left">
          <BookOpen className="mb-3 h-5 w-5 text-primary" />
          <h4 className="mb-1 text-sm font-semibold text-foreground">Scan Mission Categories</h4>
          <p className="text-xs leading-6 text-muted-foreground">
            Expand the left panel to browse reconnaissance, exploitation, and learning tracks.
          </p>
        </div>
        <div className="hud-panel rounded-[1.6rem] p-5 text-left sm:col-span-2">
          <Bot className="mb-3 h-5 w-5 text-primary" />
          <h4 className="mb-1 text-sm font-semibold text-foreground">Activate AI Support</h4>
          <p className="text-xs leading-6 text-muted-foreground">
            Jump to the AI tab for strategy, usage guidance, and command breakdowns inside the same control surface.
          </p>
        </div>
      </div>

      <div className="mt-8 max-w-xl rounded-2xl border border-destructive/25 bg-destructive/10 px-5 py-4">
        <p className="text-xs leading-6 text-destructive">
          Warning: Only use these tools on systems you own or have explicit written permission to test.
          Unauthorized access is illegal.
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
