import { ThemeToggle } from './ThemeToggle'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold">Perplexity Clone</div>
          <ThemeToggle />
        </div>
      </header>
      <main className="container py-8">
        {children}
      </main>
    </div>
  )
}
