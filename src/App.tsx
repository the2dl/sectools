import { Shield, Network, Bug, Key, Lock } from 'lucide-react';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { tools } from '@/data/tools';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/sonner';

const ACCESS_TOKEN = 'SecTools';
const TOKEN_STORAGE_KEY = 'security-tools-token';

const iconMap = {
  network: Network,
  bug: Bug,
  shield: Shield,
  key: Key,
};

function AuthScreen({ onAuth }: { onAuth: () => void }) {
  const [token, setToken] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (token === ACCESS_TOKEN) {
      localStorage.setItem(TOKEN_STORAGE_KEY, token);
      onAuth();
    } else {
      toast({
        title: "Access Denied",
        description: "Invalid token provided. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
            <Lock className="w-6 h-6" />
          </div>
          <CardTitle className="text-2xl">Security Tools Hub</CardTitle>
          <CardDescription>Enter your access token to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Enter access token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <Button type="submit" className="w-full">
              Access Tools
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function MainContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', ...new Set(tools.map((tool) => tool.category))];

  const filteredTools =
    selectedCategory === 'all'
      ? tools
      : tools.filter((tool) => tool.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6" />
            <h1 className="text-xl font-bold">Security Tools Hub</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Essential Security Tools Collection
          </h2>
          <p className="text-muted-foreground">
            A curated list of powerful security tools for professionals and enthusiasts.
            Explore our collection of network analyzers, penetration testing frameworks,
            and more.
          </p>
        </div>

        <div className="mb-8">
          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem
                  key={category}
                  value={category}
                  className="capitalize"
                >
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => {
            const IconComponent = iconMap[tool.icon as keyof typeof iconMap];
            return (
              <Card key={tool.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {tool.category}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4">
                    {tool.description}
                  </p>
                  <div className="mt-auto">
                    <Button
                      className="w-full"
                      onClick={() => window.open(tool.url, '_blank')}
                    >
                      Visit Tool
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>

      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>
            Security Tools Hub - A curated collection of essential security tools
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (storedToken === ACCESS_TOKEN) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="security-tools-theme">
      {isAuthenticated ? (
        <MainContent />
      ) : (
        <AuthScreen onAuth={() => setIsAuthenticated(true)} />
      )}
      <Toaster />
    </ThemeProvider>
  );
}

export default App;