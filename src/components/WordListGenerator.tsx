import { useState, useCallback, useMemo } from 'react';
import { 
  Download, 
  Zap, 
  Settings2, 
  Copy, 
  Trash2, 
  Play,
  Hash,
  Type,
  AtSign,
  Binary,
  Sparkles,
  Layers,
  ChevronUp,
  ChevronDown,
  X,
  Plus,
  Shield,
  User,
  Wifi,
  Mail,
  Calendar,
  Building,
  Cpu,
  Users,
  FileText,
  Check,
  ChevronRight,
  Eye,
  EyeOff
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface GeneratorConfig {
  minLength: number;
  maxLength: number;
  includeLowercase: boolean;
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSpecial: boolean;
  customChars: string;
  prefix: string;
  suffix: string;
  leetSpeak: boolean;
  capitalize: boolean;
  appendNumbers: boolean;
  appendYears: boolean;
  appendSpecial: boolean;
  reverse: boolean;
  duplicateChars: boolean;
}

const LEET_MAP: Record<string, string[]> = {
  'a': ['4', '@'],
  'e': ['3'],
  'i': ['1', '!'],
  'o': ['0'],
  's': ['5', '$'],
  't': ['7'],
  'l': ['1'],
  'g': ['9'],
  'b': ['8'],
  'z': ['2'],
};

const COMMON_YEARS = ['2020', '2021', '2022', '2023', '2024', '2025', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005'];
const COMMON_NUMBERS = ['1', '12', '123', '1234', '12345', '123456', '01', '007', '69', '420', '666', '777', '888', '999', '00', '11', '22', '33'];
const COMMON_SPECIAL = ['!', '@', '#', '$', '%', '!@#', '!!!', '@@@', '123!', '!@#$'];

const PRESET_TEMPLATES = {
  commonPasswords: {
    name: 'Common Passwords',
    description: 'Top 100 most used passwords',
    icon: 'Shield',
    words: [
      'password', '123456', '12345678', 'qwerty', 'abc123', 'monkey', '1234567', 'letmein',
      'trustno1', 'dragon', 'baseball', 'iloveyou', 'master', 'sunshine', 'ashley', 'bailey',
      'passw0rd', 'shadow', '123123', '654321', 'superman', 'qazwsx', 'michael', 'football',
      'password1', 'password123', 'batman', 'login', 'admin', 'princess', 'solo', 'qwerty123',
      'starwars', 'access', 'flower', 'mustang', 'whatever', 'hello', 'charlie', 'donald',
      'welcome', 'ninja', 'lovely', 'yamaha', 'hunter', 'joshua', 'cheese', 'amanda',
      'summer', 'test', 'jessica', 'ginger', 'jordan', 'killer', 'pepper', 'maggie',
      'andrew', 'harley', 'soccer', 'ranger', 'zxcvbn', 'thunder', 'password2', 'tigger',
      'purple', 'andrea', 'chicken', 'pepper123', 'qwertyuiop', 'pass123', 'passpass', 'hockey',
      'freedom', 'master123', 'matrix', 'thomas', 'george', 'computer', 'michelle', 'internet',
      'secret', 'admin123', 'hammer', 'diamond', 'jennifer', 'silver', 'taylor', 'golfer',
      'cookie', 'richard', 'midnight', 'merlin', 'robert', 'buster', 'cheese1', 'batman123'
    ]
  },
  usernames: {
    name: 'Usernames',
    description: 'Popular usernames and handles',
    icon: 'User',
    words: [
      'admin', 'administrator', 'root', 'user', 'guest', 'test', 'demo', 'support',
      'info', 'sales', 'contact', 'webmaster', 'postmaster', 'hostmaster', 'manager',
      'operator', 'service', 'backup', 'system', 'sysadmin', 'superuser', 'supervisor',
      'john', 'jane', 'mike', 'david', 'james', 'robert', 'william', 'richard',
      'joseph', 'thomas', 'charles', 'daniel', 'matthew', 'anthony', 'donald', 'steven',
      'admin1', 'admin2', 'user1', 'user2', 'test1', 'test2', 'dev', 'developer',
      'ftp', 'ftpuser', 'mysql', 'oracle', 'postgres', 'mongodb', 'redis', 'apache',
      'nginx', 'tomcat', 'jenkins', 'git', 'svn', 'deploy', 'staging', 'production',
      'marketing', 'hr', 'finance', 'accounting', 'legal', 'security', 'audit', 'ceo',
      'cto', 'cfo', 'coo', 'vp', 'director', 'assistant', 'intern', 'contractor'
    ]
  },
  networkDefaults: {
    name: 'Network Defaults',
    description: 'Router/device credentials',
    icon: 'Wifi',
    words: [
      'admin', 'password', 'admin123', 'root', '1234', '12345', 'cisco', 'default',
      'netgear', 'linksys', 'dlink', 'tplink', 'asus', 'belkin', 'comcast', 'xfinity',
      'spectrum', 'att', 'verizon', 'router', 'wireless', 'wifi', 'wlan', 'connection',
      'guest', 'public', 'private', 'setup', 'config', 'configuration', 'network', 'internet',
      'Netgear1', 'Admin123', 'Password1', 'Cisco123', 'Router123', 'Wifi123', 'Home123',
      'motorola', 'arris', 'ubiquiti', 'mikrotik', 'fortinet', 'sonicwall', 'watchguard'
    ]
  },
  emailPatterns: {
    name: 'Email Patterns',
    description: 'Common email usernames',
    icon: 'Mail',
    words: [
      'info', 'contact', 'hello', 'support', 'help', 'sales', 'admin', 'webmaster',
      'postmaster', 'hostmaster', 'abuse', 'noc', 'security', 'jobs', 'careers', 'hr',
      'billing', 'invoice', 'payment', 'orders', 'shipping', 'returns', 'feedback',
      'newsletter', 'marketing', 'media', 'press', 'pr', 'social', 'team', 'office',
      'no-reply', 'noreply', 'donotreply', 'notifications', 'alerts', 'updates', 'news',
      'service', 'customerservice', 'customer', 'client', 'enquiries', 'inquiries', 'general'
    ]
  },
  seasonalPasswords: {
    name: 'Seasonal',
    description: 'Season and holiday based',
    icon: 'Calendar',
    words: [
      'spring', 'summer', 'fall', 'autumn', 'winter', 'january', 'february', 'march',
      'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december',
      'christmas', 'newyear', 'easter', 'halloween', 'thanksgiving', 'valentine', 'holiday',
      'spring2024', 'summer2024', 'winter2024', 'fall2024', 'jan2024', 'feb2024', 'dec2024',
      'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'weekend'
    ]
  },
  companyNames: {
    name: 'Company Keywords',
    description: 'Corporate password terms',
    icon: 'Building',
    words: [
      'company', 'corp', 'enterprise', 'business', 'corporate', 'office', 'work',
      'employee', 'staff', 'team', 'group', 'department', 'division', 'branch',
      'welcome', 'welcome1', 'welcome123', 'newuser', 'changeme', 'temp', 'temporary',
      'password1', 'password123', 'pass1234', 'letmein', 'access', 'secure', 'security',
      'training', 'onboard', 'newstart', 'first', 'initial', 'setup', 'reset'
    ]
  },
  techTerms: {
    name: 'Tech/IT',
    description: 'Technology related words',
    icon: 'Cpu',
    words: [
      'server', 'database', 'backup', 'cloud', 'system', 'network', 'firewall', 'security',
      'linux', 'windows', 'macos', 'ubuntu', 'centos', 'debian', 'redhat', 'fedora',
      'python', 'java', 'javascript', 'nodejs', 'react', 'angular', 'vue', 'docker',
      'kubernetes', 'aws', 'azure', 'gcp', 'devops', 'cicd', 'gitlab', 'github',
      'api', 'rest', 'graphql', 'sql', 'nosql', 'cache', 'proxy', 'loadbalancer'
    ]
  },
  nameCombos: {
    name: 'Name Combos',
    description: 'Names with common suffixes',
    icon: 'Users',
    words: [
      'john123', 'mike123', 'david123', 'james123', 'robert123', 'mary123', 'jennifer123',
      'john2024', 'mike2024', 'david2024', 'james2024', 'sarah2024', 'emily2024', 'anna2024',
      'john!', 'mike!', 'david!', 'james!', 'sarah!', 'emily!', 'jessica!', 'ashley!',
      'john_admin', 'mike_admin', 'david_admin', 'admin_john', 'admin_mike', 'admin_david',
      'johnsmith', 'mikesmith', 'davidjones', 'jamesbrown', 'robertwilliams', 'maryjohnson'
    ]
  }
};

type PresetKey = keyof typeof PRESET_TEMPLATES;
type ModeType = 'random' | 'pattern' | 'mutate' | 'combine' | 'presets';

const MODES = [
  { id: 'random' as ModeType, label: 'Random', icon: Binary, desc: 'Generate random strings' },
  { id: 'pattern' as ModeType, label: 'Pattern', icon: Hash, desc: 'Pattern-based like Crunch' },
  { id: 'mutate' as ModeType, label: 'Mutate', icon: Sparkles, desc: 'Transform base words' },
  { id: 'combine' as ModeType, label: 'Combine', icon: Layers, desc: 'Merge multiple words' },
  { id: 'presets' as ModeType, label: 'Presets', icon: FileText, desc: 'Use preset templates' },
];

const WordListGenerator = () => {
  const isMobile = useIsMobile();
  const [activeMode, setActiveMode] = useState<ModeType>('random');
  const [selectedPresets, setSelectedPresets] = useState<Set<PresetKey>>(new Set());
  const [baseWords, setBaseWords] = useState('');
  const [pattern, setPattern] = useState('');
  const [generatedWords, setGeneratedWords] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [config, setConfig] = useState<GeneratorConfig>({
    minLength: 4,
    maxLength: 12,
    includeLowercase: true,
    includeUppercase: true,
    includeNumbers: true,
    includeSpecial: false,
    customChars: '',
    prefix: '',
    suffix: '',
    leetSpeak: false,
    capitalize: true,
    appendNumbers: true,
    appendYears: true,
    appendSpecial: false,
    reverse: false,
    duplicateChars: false,
  });

  const updateConfig = (key: keyof GeneratorConfig, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const toLeetSpeak = useCallback((word: string): string[] => {
    const results: string[] = [word];
    let current = word.toLowerCase();
    
    for (const [char, replacements] of Object.entries(LEET_MAP)) {
      if (current.includes(char)) {
        const newResults: string[] = [];
        for (const result of results) {
          newResults.push(result);
          for (const replacement of replacements) {
            newResults.push(result.replace(new RegExp(char, 'gi'), replacement));
          }
        }
        results.push(...newResults.slice(results.length));
      }
    }
    
    return [...new Set(results)];
  }, []);

  const generateMutations = useCallback((word: string): string[] => {
    const mutations: string[] = [word];
    
    if (config.capitalize) {
      mutations.push(word.toLowerCase());
      mutations.push(word.toUpperCase());
      mutations.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
      mutations.push(word.toLowerCase().split('').map((c, i) => i % 2 === 0 ? c.toUpperCase() : c).join(''));
    }
    
    if (config.appendNumbers) {
      for (const num of COMMON_NUMBERS) {
        mutations.push(word + num);
        if (config.capitalize) {
          mutations.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + num);
        }
      }
    }
    
    if (config.appendYears) {
      for (const year of COMMON_YEARS) {
        mutations.push(word + year);
        if (config.capitalize) {
          mutations.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + year);
        }
      }
    }
    
    if (config.appendSpecial) {
      for (const special of COMMON_SPECIAL) {
        mutations.push(word + special);
        mutations.push(special + word);
      }
    }
    
    if (config.reverse) {
      mutations.push(word.split('').reverse().join(''));
    }
    
    if (config.duplicateChars) {
      mutations.push(word.split('').map(c => c + c).join(''));
    }
    
    if (config.leetSpeak) {
      const leetVariants = toLeetSpeak(word);
      mutations.push(...leetVariants);
    }
    
    if (config.prefix) {
      const withPrefix = mutations.map(m => config.prefix + m);
      mutations.push(...withPrefix);
    }
    
    if (config.suffix) {
      const withSuffix = mutations.map(m => m + config.suffix);
      mutations.push(...withSuffix);
    }
    
    return [...new Set(mutations)].filter(
      m => m.length >= config.minLength && m.length <= config.maxLength
    );
  }, [config, toLeetSpeak]);

  const generateFromPattern = useCallback((patternStr: string, maxResults = 10000): string[] => {
    const results: string[] = [];
    const charSets: Record<string, string> = {
      '@': 'abcdefghijklmnopqrstuvwxyz',
      ',': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      '%': '0123456789',
      '^': '!@#$%^&*()_+-=[]{}|;:,.<>?',
      '*': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    };
    
    const positions: string[][] = [];
    for (const char of patternStr) {
      if (charSets[char]) {
        positions.push(charSets[char].split(''));
      } else {
        positions.push([char]);
      }
    }
    
    if (positions.length === 0) return [];
    
    const totalCombinations = positions.reduce((acc, pos) => acc * pos.length, 1);
    
    if (totalCombinations <= maxResults) {
      const generate = (current: string, depth: number): void => {
        if (depth === positions.length) {
          results.push(current);
          return;
        }
        for (const char of positions[depth]) {
          generate(current + char, depth + 1);
        }
      };
      generate('', 0);
    } else {
      for (let i = 0; i < maxResults; i++) {
        let word = '';
        for (const pos of positions) {
          word += pos[Math.floor(Math.random() * pos.length)];
        }
        results.push(word);
      }
    }
    
    return [...new Set(results)];
  }, []);

  const generateCombinations = useCallback((words: string[]): string[] => {
    const results: string[] = [];
    
    for (const word1 of words) {
      for (const word2 of words) {
        if (word1 !== word2) {
          results.push(word1 + word2);
          results.push(word2 + word1);
          results.push(word1 + '_' + word2);
          results.push(word1 + '-' + word2);
          results.push(word1 + '.' + word2);
        }
      }
    }
    
    const mutatedResults: string[] = [];
    for (const word of results.slice(0, 1000)) {
      mutatedResults.push(...generateMutations(word).slice(0, 5));
    }
    
    return [...new Set([...results, ...mutatedResults])].filter(
      w => w.length >= config.minLength && w.length <= config.maxLength
    );
  }, [config.minLength, config.maxLength, generateMutations]);

  const generateBasic = useCallback((count: number): string[] => {
    let charset = '';
    if (config.includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (config.includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (config.includeNumbers) charset += '0123456789';
    if (config.includeSpecial) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    if (config.customChars) charset += config.customChars;
    
    if (!charset) return [];
    
    const results: string[] = [];
    for (let i = 0; i < count; i++) {
      const length = config.minLength + Math.floor(Math.random() * (config.maxLength - config.minLength + 1));
      let word = '';
      for (let j = 0; j < length; j++) {
        word += charset[Math.floor(Math.random() * charset.length)];
      }
      if (config.prefix) word = config.prefix + word;
      if (config.suffix) word = word + config.suffix;
      results.push(word);
    }
    
    return [...new Set(results)];
  }, [config]);

  const handleGenerate = useCallback(() => {
    setIsGenerating(true);
    
    setTimeout(() => {
      let results: string[] = [];
      
      switch (activeMode) {
        case 'random':
          results = generateBasic(5000);
          break;
        case 'pattern':
          if (pattern) {
            results = generateFromPattern(pattern);
          }
          break;
        case 'mutate':
          const words = baseWords.split('\n').filter(w => w.trim());
          for (const word of words) {
            results.push(...generateMutations(word.trim()));
          }
          results = [...new Set(results)];
          break;
        case 'combine':
          const combineWords = baseWords.split('\n').filter(w => w.trim()).map(w => w.trim());
          results = generateCombinations(combineWords);
          break;
        case 'presets':
          const presetWords: string[] = [];
          selectedPresets.forEach(presetKey => {
            presetWords.push(...PRESET_TEMPLATES[presetKey].words);
          });
          for (const word of presetWords) {
            results.push(...generateMutations(word));
          }
          results = [...new Set(results)];
          break;
      }
      
      setGeneratedWords(results);
      setIsGenerating(false);
      setShowOutput(true);
      
      toast({
        title: "Generation Complete",
        description: `Generated ${results.length.toLocaleString()} unique words`,
      });
    }, 100);
  }, [activeMode, pattern, baseWords, selectedPresets, generateBasic, generateFromPattern, generateMutations, generateCombinations]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(generatedWords.join('\n'));
    toast({
      title: "Copied!",
      description: `${generatedWords.length.toLocaleString()} words copied to clipboard`,
    });
  }, [generatedWords]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([generatedWords.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wordlist_${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: `Wordlist saved with ${generatedWords.length.toLocaleString()} words`,
    });
  }, [generatedWords]);

  const handleClear = useCallback(() => {
    setGeneratedWords([]);
    setBaseWords('');
    setPattern('');
    setSelectedPresets(new Set());
    setShowOutput(false);
  }, []);

  const estimatedCount = useMemo(() => {
    if (activeMode === 'pattern' && pattern) {
      const charSets: Record<string, number> = { '@': 26, ',': 26, '%': 10, '^': 32, '*': 62 };
      let count = 1;
      for (const char of pattern) {
        count *= charSets[char] || 1;
      }
      return count;
    }
    return 0;
  }, [activeMode, pattern]);

  const getIconComponent = (iconName: string) => {
    const icons: Record<string, any> = { Shield, User, Wifi, Mail, Calendar, Building, Cpu, Users };
    return icons[iconName] || Shield;
  };

  // Render Settings Panel
  const renderSettings = () => (
    <div className="space-y-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Length: {config.minLength} - {config.maxLength}</Label>
        </div>
        <Slider 
          value={[config.minLength, config.maxLength]}
          min={1}
          max={50}
          step={1}
          onValueChange={([min, max]) => {
            updateConfig('minLength', min);
            updateConfig('maxLength', max);
          }}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label className="text-xs text-muted-foreground">Prefix</Label>
          <Input 
            placeholder="admin_"
            value={config.prefix}
            onChange={(e) => updateConfig('prefix', e.target.value)}
            className="font-mono h-8 text-sm"
          />
        </div>
        <div>
          <Label className="text-xs text-muted-foreground">Suffix</Label>
          <Input 
            placeholder="_2024"
            value={config.suffix}
            onChange={(e) => updateConfig('suffix', e.target.value)}
            className="font-mono h-8 text-sm"
          />
        </div>
      </div>
    </div>
  );

  // Render mode content
  const renderModeContent = () => {
    switch (activeMode) {
      case 'random':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {[
                { key: 'includeLowercase', label: 'a-z', icon: Type },
                { key: 'includeUppercase', label: 'A-Z', icon: Type },
                { key: 'includeNumbers', label: '0-9', icon: Hash },
                { key: 'includeSpecial', label: '!@#', icon: AtSign },
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => updateConfig(key as keyof GeneratorConfig, !config[key as keyof GeneratorConfig])}
                  className={cn(
                    "flex items-center gap-2 p-3 rounded-lg border transition-all",
                    config[key as keyof GeneratorConfig]
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-mono text-sm">{label}</span>
                  {config[key as keyof GeneratorConfig] && <Check className="w-3 h-3 ml-auto" />}
                </button>
              ))}
            </div>
            <Input 
              placeholder="Custom characters..."
              value={config.customChars}
              onChange={(e) => updateConfig('customChars', e.target.value)}
              className="font-mono"
            />
          </div>
        );

      case 'pattern':
        return (
          <div className="space-y-4">
            <Input 
              placeholder="@@@@%%%% or admin@@@"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              className="font-mono text-lg h-12"
            />
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs bg-muted/30 p-3 rounded-lg">
              <div><code className="text-primary">@</code> = a-z</div>
              <div><code className="text-primary">,</code> = A-Z</div>
              <div><code className="text-primary">%</code> = 0-9</div>
              <div><code className="text-primary">^</code> = special</div>
              <div><code className="text-primary">*</code> = alphanumeric</div>
              <div>other = literal</div>
            </div>
            {pattern && (
              <div className="text-sm font-mono text-primary">
                ~ {estimatedCount > 10000 ? '10,000' : estimatedCount.toLocaleString()} results
              </div>
            )}
          </div>
        );

      case 'mutate':
        return (
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input 
                placeholder="Add word..."
                id="mutate-word-input"
                className="font-mono"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const input = e.target as HTMLInputElement;
                    const newWord = input.value.trim();
                    if (newWord) {
                      setBaseWords(prev => prev ? prev + '\n' + newWord : newWord);
                      input.value = '';
                    }
                  }
                }}
              />
              <Button 
                size="icon"
                variant="secondary"
                onClick={() => {
                  const input = document.getElementById('mutate-word-input') as HTMLInputElement;
                  const newWord = input?.value.trim();
                  if (newWord) {
                    setBaseWords(prev => prev ? prev + '\n' + newWord : newWord);
                    input.value = '';
                  }
                }}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            
            <ScrollArea className="h-24 rounded-lg border border-border">
              <div className="p-2 space-y-1">
                {baseWords.split('\n').filter(w => w.trim()).map((word, index, arr) => (
                  <div key={index} className="flex items-center gap-1 px-2 py-1.5 rounded bg-muted/50 group">
                    <span className="flex-1 font-mono text-sm truncate">{word.trim()}</span>
                    <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="ghost" className="h-6 w-6" disabled={index === 0}
                        onClick={() => {
                          const words = baseWords.split('\n').filter(w => w.trim());
                          [words[index - 1], words[index]] = [words[index], words[index - 1]];
                          setBaseWords(words.join('\n'));
                        }}>
                        <ChevronUp className="w-3 h-3" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-6 w-6" disabled={index === arr.length - 1}
                        onClick={() => {
                          const words = baseWords.split('\n').filter(w => w.trim());
                          [words[index], words[index + 1]] = [words[index + 1], words[index]];
                          setBaseWords(words.join('\n'));
                        }}>
                        <ChevronDown className="w-3 h-3" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-6 w-6 text-destructive"
                        onClick={() => {
                          const words = baseWords.split('\n').filter(w => w.trim());
                          words.splice(index, 1);
                          setBaseWords(words.join('\n'));
                        }}>
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
                {!baseWords.trim() && (
                  <p className="text-xs text-muted-foreground text-center py-4">Add words to mutate</p>
                )}
              </div>
            </ScrollArea>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { key: 'capitalize', label: 'Case' },
                { key: 'leetSpeak', label: 'L33t' },
                { key: 'appendNumbers', label: '+Nums' },
                { key: 'appendYears', label: '+Years' },
                { key: 'appendSpecial', label: '+Symbols' },
                { key: 'reverse', label: 'Reverse' },
                { key: 'duplicateChars', label: 'Double' },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => updateConfig(key as keyof GeneratorConfig, !config[key as keyof GeneratorConfig])}
                  className={cn(
                    "px-2 py-1.5 rounded text-xs font-medium transition-all",
                    config[key as keyof GeneratorConfig]
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/50 hover:bg-muted"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        );

      case 'combine':
        return (
          <div className="space-y-4">
            <Textarea 
              placeholder="john&#10;admin&#10;2024&#10;password"
              value={baseWords}
              onChange={(e) => setBaseWords(e.target.value)}
              className="font-mono min-h-[120px]"
            />
            <p className="text-xs text-muted-foreground">
              Combines all words with separators (_, -, .) and applies mutations.
            </p>
          </div>
        );

      case 'presets':
        return (
          <div className="space-y-3">
            <div className="flex gap-2 mb-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setSelectedPresets(new Set(Object.keys(PRESET_TEMPLATES) as PresetKey[]))}
                className="flex-1 text-xs"
              >
                Select All
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setSelectedPresets(new Set())}
                className="flex-1 text-xs"
              >
                Clear
              </Button>
            </div>
            <div className="grid gap-2">
              {(Object.entries(PRESET_TEMPLATES) as [PresetKey, typeof PRESET_TEMPLATES[PresetKey]][]).map(([key, preset]) => {
                const isSelected = selectedPresets.has(key);
                const IconComponent = getIconComponent(preset.icon);
                
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedPresets(prev => {
                        const newSet = new Set(prev);
                        if (newSet.has(key)) {
                          newSet.delete(key);
                        } else {
                          newSet.add(key);
                        }
                        return newSet;
                      });
                    }}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg border text-left transition-all w-full",
                      isSelected 
                        ? "border-primary bg-primary/10" 
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-md flex items-center justify-center shrink-0",
                      isSelected ? "bg-primary text-primary-foreground" : "bg-muted"
                    )}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium">{preset.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{preset.words.length} words</div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-primary shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        );
    }
  };

  // Output Panel
  const renderOutput = () => (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{generatedWords.length.toLocaleString()} words</Badge>
          {generatedWords.length > 0 && (
            <span className="text-xs text-muted-foreground">
              avg {Math.round(generatedWords.reduce((a, w) => a + w.length, 0) / generatedWords.length)} chars
            </span>
          )}
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" onClick={handleCopy} disabled={!generatedWords.length}>
            <Copy className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleDownload} disabled={!generatedWords.length}>
            <Download className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleClear} disabled={!generatedWords.length}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <ScrollArea className="flex-1 p-3">
        {generatedWords.length > 0 ? (
          <div className="font-mono text-xs space-y-0.5">
            {generatedWords.slice(0, 2000).map((word, i) => (
              <div key={i} className="py-0.5 hover:bg-muted/30 px-1 rounded truncate">{word}</div>
            ))}
            {generatedWords.length > 2000 && (
              <div className="text-muted-foreground italic pt-2">
                + {(generatedWords.length - 2000).toLocaleString()} more
              </div>
            )}
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <Zap className="w-10 h-10 mx-auto mb-2 opacity-20" />
              <p className="text-sm">Results appear here</p>
            </div>
          </div>
        )}
      </ScrollArea>
    </div>
  );

  // Mobile Layout
  if (isMobile) {
    return (
      <div className="h-full flex flex-col">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-3 border-b border-border">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-mono font-bold text-primary">Wordlist Gen</span>
          </div>
          <div className="flex gap-1">
            <Button
              variant={showOutput ? "default" : "ghost"}
              size="sm"
              onClick={() => setShowOutput(!showOutput)}
            >
              {showOutput ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
              {generatedWords.length > 0 && generatedWords.length.toLocaleString()}
            </Button>
          </div>
        </div>

        {showOutput ? (
          <div className="flex-1 overflow-hidden">
            {renderOutput()}
          </div>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Mode Selector - Horizontal Scroll */}
            <div className="flex gap-2 p-3 overflow-x-auto border-b border-border">
              {MODES.map(mode => (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap transition-all shrink-0",
                    activeMode === mode.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/50 hover:bg-muted"
                  )}
                >
                  <mode.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{mode.label}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            <ScrollArea className="flex-1">
              <div className="p-4 space-y-4">
                {renderModeContent()}
                
                {/* Settings Toggle */}
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="flex items-center justify-between w-full p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Settings2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Settings</span>
                  </div>
                  <ChevronRight className={cn("w-4 h-4 transition-transform", showSettings && "rotate-90")} />
                </button>
                
                {showSettings && (
                  <div className="p-3 rounded-lg border border-border">
                    {renderSettings()}
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Generate Button - Fixed Bottom */}
            <div className="p-3 border-t border-border bg-card">
              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating}
                className="w-full h-12"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <Settings2 className="w-5 h-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    Generate
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop Layout
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-bold font-mono text-primary">Word List Generator</h2>
            <p className="text-xs text-muted-foreground">Advanced password & wordlist generation</p>
          </div>
        </div>
        {generatedWords.length > 0 && (
          <Badge variant="secondary" className="text-sm">
            {generatedWords.length.toLocaleString()} words
          </Badge>
        )}
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left: Mode Selection */}
        <div className="w-48 border-r border-border p-3 space-y-1">
          {MODES.map(mode => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={cn(
                "flex items-center gap-3 w-full px-3 py-2.5 rounded-lg transition-all text-left",
                activeMode === mode.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted/50"
              )}
            >
              <mode.icon className="w-4 h-4 shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-medium">{mode.label}</div>
                <div className={cn(
                  "text-xs truncate",
                  activeMode === mode.id ? "text-primary-foreground/70" : "text-muted-foreground"
                )}>
                  {mode.desc}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Center: Configuration */}
        <div className="flex-1 flex flex-col border-r border-border">
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-6">
              {renderModeContent()}
              
              <div className="pt-4 border-t border-border">
                {renderSettings()}
              </div>
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t border-border">
            <Button 
              onClick={handleGenerate} 
              disabled={isGenerating}
              className="w-full h-11"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <Settings2 className="w-5 h-5 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Generate Wordlist
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Right: Output */}
        <div className="w-80 flex flex-col">
          {renderOutput()}
        </div>
      </div>
    </div>
  );
};

export default WordListGenerator;
