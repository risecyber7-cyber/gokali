import { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'instagram_promo_last_shown';

const InstagramPromoDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem(STORAGE_KEY);
    const today = new Date().toDateString();
    if (lastShown !== today) {
      setOpen(true);
      localStorage.setItem(STORAGE_KEY, today);
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md border-primary/30 bg-background">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Instagram className="w-6 h-6 text-primary" />
            New Instagram Account!
          </DialogTitle>
          <DialogDescription className="text-muted-foreground pt-2 text-sm leading-relaxed">
            We've created a new Instagram account! All <span className="text-primary font-semibold">GO KALI</span> updates will now be posted on this ID. Follow now so you don't miss any updates! 🚀
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 py-4">
          <a
            href="https://www.instagram.com/gokalipro/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-colors"
          >
            <Instagram className="w-5 h-5 text-primary" />
            <span className="text-primary font-mono font-semibold text-lg">@gokalipro</span>
          </a>

          <Button
            asChild
            className="w-full"
          >
            <a
              href="https://www.instagram.com/gokalipro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Follow Now
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InstagramPromoDialog;
