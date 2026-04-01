import { useState } from 'react';
import { MessageSquare, Send, Bot, AlertCircle } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { kaliTools, getToolById, searchTools } from '@/data/kaliTools';
import { toast } from '@/hooks/use-toast';

interface QASectionProps {
  onSelectTool: (toolId: string) => void;
}

interface QAResponse {
  message: string;
  commands?: { command: string; explanation: string }[];
  warnings?: string[];
  relatedTool?: string;
}

const QASection = ({ onSelectTool }: QASectionProps) => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState<QAResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const findToolInQuestion = (q: string): string | null => {
    const lowerQ = q.toLowerCase();
    for (const tool of kaliTools) {
      if (lowerQ.includes(tool.id.toLowerCase()) || lowerQ.includes(tool.name.toLowerCase())) {
        return tool.id;
      }
    }
    return null;
  };

  const generateResponse = (q: string): QAResponse => {
    const toolId = findToolInQuestion(q);
    const lowerQ = q.toLowerCase();

    // SQL Injection related
    if (lowerQ.includes('sql injection') || lowerQ.includes('sqlmap')) {
      return {
        message: "For SQL injection testing, SQLmap is your best friend! Here's how to get started:",
        commands: [
          { command: 'sqlmap -u "http://target.com/page?id=1"', explanation: 'Tests if the parameter is vulnerable to SQL injection' },
          { command: 'sqlmap -u "URL" --dbs', explanation: 'Lists all databases if injection is successful' },
          { command: 'sqlmap -u "URL" -D database --tables', explanation: 'Shows tables in a specific database' },
        ],
        warnings: ['Only test on systems you own or have written permission to test', 'SQL injection testing without authorization is illegal'],
        relatedTool: 'sqlmap',
      };
    }

    // Port scanning
    if (lowerQ.includes('port') || lowerQ.includes('scan') || lowerQ.includes('nmap')) {
      return {
        message: "For port scanning and network discovery, Nmap is the go-to tool:",
        commands: [
          { command: 'nmap 192.168.1.1', explanation: 'Basic scan of common ports' },
          { command: 'nmap -sV 192.168.1.1', explanation: 'Detects service versions on open ports' },
          { command: 'nmap -p- 192.168.1.1', explanation: 'Scans all 65535 ports (takes longer)' },
        ],
        warnings: ['Never scan networks without permission', 'Port scanning can be detected by IDS/IPS'],
        relatedTool: 'nmap',
      };
    }

    // Password cracking
    if (lowerQ.includes('password') || lowerQ.includes('crack') || lowerQ.includes('brute force') || lowerQ.includes('hydra') || lowerQ.includes('john')) {
      return {
        message: "For password testing, you have two main options: Hydra for online attacks, John for offline hash cracking:",
        commands: [
          { command: 'hydra -l admin -P wordlist.txt 192.168.1.1 ssh', explanation: 'Brute force SSH login (Hydra - online)' },
          { command: 'john --wordlist=wordlist.txt hashes.txt', explanation: 'Crack password hashes (John - offline)' },
        ],
        warnings: ['Password attacks without permission are illegal', 'Online attacks may trigger account lockouts'],
        relatedTool: 'hydra',
      };
    }

    // WiFi hacking
    if (lowerQ.includes('wifi') || lowerQ.includes('wireless') || lowerQ.includes('aircrack')) {
      return {
        message: "For WiFi security testing, the Aircrack-ng suite is essential:",
        commands: [
          { command: 'airmon-ng start wlan0', explanation: 'Enable monitor mode on wireless card' },
          { command: 'airodump-ng wlan0mon', explanation: 'Scan for nearby WiFi networks' },
          { command: 'aircrack-ng -w wordlist.txt capture.cap', explanation: 'Crack WPA password from captured handshake' },
        ],
        warnings: ['Only attack WiFi networks you own', 'Wireless attacks are illegal without permission'],
        relatedTool: 'aircrack-ng',
      };
    }

    // Website vulnerability
    if (lowerQ.includes('website') || lowerQ.includes('web') || lowerQ.includes('vulnerability') || lowerQ.includes('nikto')) {
      return {
        message: "For web vulnerability scanning, Nikto is a great starting point:",
        commands: [
          { command: 'nikto -h http://target.com', explanation: 'Scan web server for vulnerabilities' },
          { command: 'gobuster dir -u http://target.com -w wordlist.txt', explanation: 'Find hidden directories' },
        ],
        warnings: ['Only scan websites you have permission to test', 'Scans are logged and can be traced'],
        relatedTool: 'nikto',
      };
    }

    // Metasploit
    if (lowerQ.includes('exploit') || lowerQ.includes('metasploit') || lowerQ.includes('meterpreter')) {
      return {
        message: "Metasploit Framework is the most powerful exploitation tool. Here's the basic workflow:",
        commands: [
          { command: 'msfconsole', explanation: 'Start Metasploit console' },
          { command: 'search <vulnerability>', explanation: 'Find exploits for a vulnerability' },
          { command: 'use <exploit_path>', explanation: 'Select an exploit module' },
          { command: 'set RHOSTS target_ip', explanation: 'Configure target' },
          { command: 'exploit', explanation: 'Run the exploit' },
        ],
        warnings: ['Exploiting without authorization is a serious crime', 'Only use in isolated lab environments for learning'],
        relatedTool: 'metasploit',
      };
    }

    // If we found a specific tool mention
    if (toolId) {
      const tool = getToolById(toolId);
      if (tool) {
        return {
          message: `I found information about ${tool.name}! ${tool.shortDescription}. Click below to see full details.`,
          commands: tool.commands.slice(0, 3).map(cmd => ({
            command: cmd.command,
            explanation: cmd.description,
          })),
          warnings: [tool.warnings[0]],
          relatedTool: toolId,
        };
      }
    }

    // Generic response
    return {
      message: "I can help you learn about Kali Linux tools! Try asking about specific tools like nmap, sqlmap, metasploit, or topics like 'how to scan ports', 'SQL injection testing', 'WiFi password cracking', etc.",
      commands: [],
      warnings: ['Always ensure you have proper authorization before testing any system'],
    };
  };

  const handleSubmit = () => {
    if (!question.trim()) {
      toast({
        title: "Please enter a question",
        description: "Type your question about Kali tools",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate processing
    setTimeout(() => {
      const resp = generateResponse(question);
      setResponse(resp);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="cyber-card p-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 bg-accent/20 rounded">
          <MessageSquare className="w-4 h-4 text-accent" />
        </div>
        <h3 className="font-semibold text-foreground">Ask Anything About Tools</h3>
      </div>

      <div className="space-y-4">
        <Textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question like: How do I use sqlmap for basic SQL injection testing?"
          className="bg-background border-border focus:border-accent min-h-[80px] resize-none"
        />
        
        <Button 
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 neon-glow"
        >
          {isLoading ? (
            <>Processing...</>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Get Answer
            </>
          )}
        </Button>

        {response && (
          <div className="mt-4 p-4 bg-background rounded-lg border border-border animate-fade-in">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent/20 rounded-lg flex-shrink-0">
                <Bot className="w-5 h-5 text-accent" />
              </div>
              <div className="space-y-3 flex-1 min-w-0">
                <p className="text-foreground/90">{response.message}</p>

                {response.commands && response.commands.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary">Commands:</p>
                    {response.commands.map((cmd, idx) => (
                      <div key={idx} className="terminal-block">
                        <code className="text-cyber-green text-sm break-all">{cmd.command}</code>
                        <p className="text-xs text-muted-foreground mt-1">{cmd.explanation}</p>
                      </div>
                    ))}
                  </div>
                )}

                {response.warnings && response.warnings.length > 0 && (
                  <div className="flex items-start gap-2 text-warning text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{response.warnings[0]}</span>
                  </div>
                )}

                {response.relatedTool && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onSelectTool(response.relatedTool!)}
                    className="border-primary/30 text-primary hover:bg-primary/10"
                  >
                    View full {getToolById(response.relatedTool)?.name} details →
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QASection;
