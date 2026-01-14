import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { TrendingUp, History, LogIn } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-(--finance-blue)" style={{ color: 'var(--color-finance-blue)' }} />
          <span className="text-xl font-bold" style={{ fontFamily: 'Commissioner, sans-serif' }}>
            FinanceHub
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <Link to="/history">
            <Button variant="ghost" className="gap-2">
              <History className="h-4 w-4" />
              <span className="hidden sm:inline">History</span>
            </Button>
          </Link>
          <Link to="/login">
            <Button className="gap-2" style={{ 
              backgroundColor: 'var(--color-finance-blue)',
              color: 'white'
            }}>
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}