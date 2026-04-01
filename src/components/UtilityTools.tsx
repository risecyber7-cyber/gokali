import { Cpu, Globe, Key, Search, Shield, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const cards = [
  {
    title: 'Password Generator',
    text: 'Preview card for random password generation. In dummy mode this does not call any external service.',
    icon: Key,
  },
  {
    title: 'IP Lookup',
    text: 'Network lookups are disabled in the shareable build. Replace with your own backend if needed later.',
    icon: Globe,
  },
  {
    title: 'Hash Identifier',
    text: 'UI-only analyzer preview with sample educational copy and no real submissions.',
    icon: Search,
  },
  {
    title: 'Security Checks',
    text: 'Validation panels remain visible, while all live checks are mocked or turned off.',
    icon: Shield,
  },
];

const UtilityTools = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 rounded-[1.6rem] border border-primary/15 bg-primary/5 p-5">
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-primary/20 bg-background/60 p-3">
            <Cpu className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Offline Preview</p>
            <h2 className="text-xl font-semibold text-foreground">Utility Tools</h2>
          </div>
        </div>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Yeh section sirf UI showcase ke liye rakha gaya hai. Real network requests, lookups, and API-driven checks disable kar diye gaye hain.
        </p>
      </div>

      <div className="grid flex-1 gap-4 md:grid-cols-2">
        {cards.map(({ title, text, icon: Icon }) => (
          <Card key={title} className="border-primary/12 bg-card/50">
            <CardHeader className="flex flex-row items-center gap-3 space-y-0">
              <div className="rounded-xl border border-primary/15 bg-primary/10 p-3">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-base">{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-6 text-muted-foreground">{text}</p>
              <Button variant="outline" className="gap-2" disabled>
                <Sparkles className="h-4 w-4" />
                Demo Only
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UtilityTools;
