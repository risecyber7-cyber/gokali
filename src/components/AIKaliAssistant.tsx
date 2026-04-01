import { useMemo, useState } from 'react';
import { Bot, Download, History, ImagePlus, Plus, Send, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import AIUsageBadge from './AIUsageBadge';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const cannedReplies = [
  'Demo response: nmap ek network discovery tool hai jo host discovery aur service detection dono ke liye use hota hai.',
  'Demo response: sqlmap automated SQL injection testing ke liye popular tool hai. Dummy UI me live exploit run nahi hota.',
  'Demo response: aircrack-ng Wi-Fi auditing suite hai. Shareable build me sirf interface preview dikhaya gaya hai.',
];

const starterMessages: Message[] = [
  {
    role: 'assistant',
    content: 'Dummy AI assistant ready. Yahan live backend ki jagah sample responses dikh rahe hain.',
  },
];

const AIKaliAssistant = () => {
  const [messages, setMessages] = useState<Message[]>(starterMessages);
  const [input, setInput] = useState('');

  const suggestions = useMemo(
    () => [
      'How to use nmap for basic host discovery?',
      'What is sqlmap used for?',
      'Explain aircrack-ng workflow',
      'How does nikto help in web scanning?',
    ],
    []
  );

  const submitMessage = () => {
    const value = input.trim();
    if (!value) {
      return;
    }

    const nextReply = cannedReplies[messages.length % cannedReplies.length];
    setMessages((current) => [
      ...current,
      { role: 'user', content: value },
      { role: 'assistant', content: nextReply },
    ]);
    setInput('');
  };

  return (
    <div className="flex h-full flex-col bg-background">
      <div className="border-b border-border px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Demo Module</p>
            <h2 className="text-lg font-semibold text-foreground">AI Kali Assistant</h2>
          </div>
          <AIUsageBadge refreshKey={0} onLimitReached={() => {}} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4 text-sm text-muted-foreground">
            Demo mode active. Chat history, file uploads, and AI requests are static previews only.
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setInput(suggestion)}
                className="rounded-xl border border-border bg-card/50 p-3 text-left text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
              >
                {suggestion}
              </button>
            ))}
          </div>

          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className="flex items-start gap-4">
              <div className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${message.role === 'user' ? 'bg-primary/20' : 'bg-accent'}`}>
                {message.role === 'user' ? <span className="text-xs font-bold text-primary">You</span> : <Bot className="h-4 w-4 text-primary" />}
              </div>
              <div className="min-w-0 flex-1">
                <p className="mb-1 text-xs font-semibold text-muted-foreground">{message.role === 'user' ? 'You' : 'AI Kali Assistant'}</p>
                <div className="whitespace-pre-wrap rounded-2xl border border-border bg-card/40 p-4 text-sm leading-7 text-foreground">
                  {message.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border bg-background/80 px-4 py-3 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center gap-2">
          <div className="flex gap-1">
            <Button size="icon" variant="ghost" className="h-9 w-9 text-muted-foreground">
              <Plus className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-9 w-9 text-muted-foreground">
              <ImagePlus className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-9 w-9 text-muted-foreground">
              <History className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-9 w-9 text-muted-foreground">
              <Download className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative flex-1">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  submitMessage();
                }
              }}
              placeholder="Type a demo prompt..."
              className="min-h-[44px] resize-none rounded-2xl border-border bg-card pl-4 pr-12 py-3 text-sm"
              rows={1}
            />
            <Button onClick={submitMessage} size="icon" className="absolute bottom-1.5 right-2 h-8 w-8 rounded-full">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIKaliAssistant;
