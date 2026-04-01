import { Link } from 'react-router-dom';
import { Terminal, Shield, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand & Description */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-7 h-7 rounded-md bg-primary/20 flex items-center justify-center">
                  <Terminal className="w-3.5 h-3.5 text-primary" />
                </div>
                <Shield className="w-3 h-3 text-primary absolute -bottom-0.5 -right-0.5" />
              </div>
              <span className="font-mono text-sm font-bold text-primary">GO KALI</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your AI-Powered Cybersecurity Copilot. Master 600+ Kali Linux tools with intelligent assistance, video tutorials, and advanced wordlist generation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground font-mono">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-xs text-muted-foreground">
              <Link to="/about" className="hover:text-primary transition-colors w-fit">About Us</Link>
              <Link to="/privacy-policy" className="hover:text-primary transition-colors w-fit">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors w-fit">Terms & Conditions</Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground font-mono">Connect With Us</h4>
            <a
              href="mailto:gokaliprohelp@gmail.com"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors w-fit group"
            >
              <Mail className="w-4 h-4" />
              <span>gokaliprohelp@gmail.com</span>
            </a>
            <a
              href="https://www.instagram.com/gokalipro/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors w-fit group"
            >
              <Instagram className="w-4 h-4" />
              <span>@gokalipro</span>
            </a>
            <p className="text-xs text-muted-foreground">
              Reach out for support, feedback & queries.
            </p>
          </div>
        </div>

        <div className="border-t border-border/50 pt-4">
          <p className="text-xs text-center text-muted-foreground">
            © {new Date().getFullYear()} GO KALI. All rights reserved. ⚠️ Educational purposes only. Use responsibly and legally.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
