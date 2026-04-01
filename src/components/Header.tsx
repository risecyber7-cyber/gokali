import { Terminal, Shield, User, Cpu, Radar } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/65 backdrop-blur-xl">
      <div className="container py-3">
        <div className="flex items-center justify-between gap-4 rounded-[1.75rem] border border-primary/12 bg-card/45 px-4 py-3 shadow-[0_20px_50px_hsl(223_64%_3%/0.25)]">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="hud-panel flex h-14 w-14 items-center justify-center rounded-2xl">
                <Terminal className="h-5 w-5 text-primary" />
              </div>
              <Shield className="absolute -bottom-1 -right-1 h-4 w-4 text-accent" />
            </div>
            <div>
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <span className="hud-chip">
                  <span className="status-dot" />
                  Neural Core Online
                </span>
                <span className="hidden rounded-full border border-primary/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:inline-flex">
                  Jarvis Menu
                </span>
              </div>
              <h1 className="text-xl font-bold font-mono text-glow text-foreground md:text-2xl">
                GO KALI
              </h1>
              <p className="max-w-xl text-xs text-muted-foreground md:text-sm">
                Tactical AI command menu for tools, training, chat, and rapid field lookup.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-full border border-primary/12 bg-card/55 px-3 py-2 md:flex">
              <Radar className="h-4 w-4 text-primary" />
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Threat Grid Synced
              </span>
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-primary/12 bg-card/55 px-3 py-2 xl:flex">
              <Cpu className="h-4 w-4 text-accent" />
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Suite Ready
              </span>
            </div>
            {user && (
              <Button
                variant="outline"
                size="sm"
                className="gap-2 rounded-full border-primary/20 bg-card/60 px-4 text-foreground shadow-[0_10px_30px_hsl(224_40%_2%/0.18)]"
                onClick={() => navigate('/profile')}
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline max-w-[120px] truncate">
                  {user.email}
                </span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
