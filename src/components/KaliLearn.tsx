import { useState, useMemo, useCallback } from 'react';
import { Search, Play, ExternalLink, Link, Youtube, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { hackingVideos, categories, type HackingVideo } from '@/data/hackingVideos';

const KaliLearn = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [customVideoUrl, setCustomVideoUrl] = useState('');
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [brokenThumbnails, setBrokenThumbnails] = useState<Set<string>>(new Set());

  const handleThumbnailError = useCallback((videoId: string) => {
    setBrokenThumbnails(prev => new Set(prev).add(videoId));
  }, []);

  const filteredVideos = useMemo(() => {
    return hackingVideos.filter(video => {
      if (brokenThumbnails.has(video.id)) return false;
      const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.channel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
      const matchesLanguage = selectedLanguage === 'all' || video.language === selectedLanguage;
      return matchesSearch && matchesCategory && matchesLanguage;
    });
  }, [searchQuery, selectedCategory, selectedLanguage, brokenThumbnails]);

  const extractVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const handlePlayCustomVideo = () => {
    const videoId = extractVideoId(customVideoUrl.trim());
    if (videoId) {
      setCurrentVideoId(videoId);
    }
  };

  const handleYouTubeSearch = () => {
    const query = encodeURIComponent(searchQuery || 'kali linux hacking tutorial');
    window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
  };

  const currentVideo = hackingVideos.find(v => v.id === currentVideoId);

  return (
    <div className="h-full flex flex-col">
      {/* Top Bar */}
      <div className="p-4 border-b border-border space-y-3">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search videos..."
              className="pl-10 bg-background/50 border-primary/30"
            />
          </div>
          <Button onClick={handleYouTubeSearch} variant="default" className="bg-red-600 hover:bg-red-700">
            <Youtube className="w-4 h-4 mr-2" />
            YouTube
          </Button>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48 bg-background/50 border-primary/30">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(cat => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-36 bg-background/50 border-primary/30">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Hindi">Hindi</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex-1 flex gap-2">
            <div className="relative flex-1">
              <Link className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={customVideoUrl}
                onChange={(e) => setCustomVideoUrl(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handlePlayCustomVideo()}
                placeholder="Paste YouTube URL..."
                className="pl-10 bg-background/50 border-primary/30"
              />
            </div>
            <Button onClick={handlePlayCustomVideo} variant="outline" className="border-primary/30">
              <Play className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{filteredVideos.length} videos</span>
          {selectedCategory !== 'all' && (
            <Badge variant="secondary" className="text-xs">{selectedCategory}</Badge>
          )}
          {selectedLanguage !== 'all' && (
            <Badge variant="outline" className="text-xs">{selectedLanguage}</Badge>
          )}
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Videos List */}
        <div className="w-80 border-r border-border flex flex-col">
          <ScrollArea className="flex-1">
            <div className="p-2 space-y-2">
              {filteredVideos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setCurrentVideoId(video.id)}
                  className={cn(
                    "w-full text-left p-2 rounded-lg transition-all",
                    "hover:bg-primary/10 border border-transparent",
                    currentVideoId === video.id && "bg-primary/20 border-primary/30"
                  )}
                >
                  <div className="flex gap-2">
                    <div className="w-28 h-16 bg-muted rounded overflow-hidden flex-shrink-0 relative">
                      <img
                        src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={() => handleThumbnailError(video.id)}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium line-clamp-2 text-foreground">
                        {video.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {video.channel}
                      </p>
                      <div className="flex gap-1 mt-1">
                        <Badge variant="outline" className="text-[10px] px-1 py-0">
                          {video.language}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Right Panel - Video Player */}
        <div className="flex-1 flex flex-col">
          {currentVideoId ? (
            <>
              <div className="aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideoId}?rel=0&modestbranding=1`}
                  title="YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              
              <div className="p-4 border-t border-border">
                {currentVideo && (
                  <div className="mb-3">
                    <h3 className="font-medium text-foreground">{currentVideo.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-muted-foreground">{currentVideo.channel}</span>
                      <Badge variant="secondary" className="text-xs">{currentVideo.category}</Badge>
                      <Badge variant="outline" className="text-xs">{currentVideo.language}</Badge>
                    </div>
                  </div>
                )}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${currentVideoId}`, '_blank')}
                    className="border-primary/30"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Watch on YouTube
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setCurrentVideoId(null);
                      setCustomVideoUrl('');
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center max-w-md px-4">
                <Play className="w-16 h-16 mx-auto text-primary/30 mb-4" />
                <h3 className="text-lg font-medium text-muted-foreground">
                  Select a Video
                </h3>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  Choose from {hackingVideos.length}+ hacking tutorials in English & Hindi
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KaliLearn;
