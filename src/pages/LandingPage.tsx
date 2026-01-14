import Header from '../components/Header'
import StockCard from '../components/StockCard'
import NewsCard from '../components/NewsCard'
import { Button } from '@/components/ui/button'
import { topStocks, financialNews } from '../data/mockData'
import { TrendingUp, Newspaper, ArrowRight, BarChart3, LineChart, Activity } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,116,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(39,116,174,0.1),transparent_50%)]" />
        
        <div className="relative container mx-auto px-4 md:px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Activity className="h-4 w-4" />
              Real-time Market Intelligence
            </div>
            
            <h1 className="heading-hero text-4xl md:text-6xl">
              Your Gateway to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Financial Success
              </span>
            </h1>
            
            <p className="text-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Track top-performing stocks, stay updated with market news, and make informed investment decisions with real-time data and analytics.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button 
                size="lg" 
                className="gap-2 text-base px-8"
                style={{
                  backgroundColor: 'var(--color-finance-blue)',
                  color: 'white'
                }}
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base px-8">
                <BarChart3 className="h-4 w-4" />
                View Markets
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              {[
                { icon: LineChart, value: '$2.4T+', label: 'Market Cap Tracked' },
                { icon: TrendingUp, value: '150+', label: 'Stock Listings' },
                { icon: Newspaper, value: '24/7', label: 'News Updates' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-(--finance-teal)" style={{ color: 'var(--color-finance-teal)' }} />
                  <p className="text-2xl font-bold" style={{ fontFamily: 'Commissioner, sans-serif' }}>{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Stocks Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-6 w-6" style={{ color: 'var(--color-bull-green)' }} />
                <h2 className="heading-section text-3xl md:text-4xl">Today's Top Earners</h2>
              </div>
              <p className="text-muted-foreground text-body">
                Best performing stocks in the market today
              </p>
            </div>
            <Button variant="ghost" className="gap-2 hidden md:flex">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topStocks.map((stock) => (
              <StockCard key={stock.symbol} stock={stock} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button variant="ghost" className="gap-2">
              View All Stocks
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Newspaper className="h-6 w-6" style={{ color: 'var(--color-accent-blue)' }} />
                <h2 className="heading-section text-3xl md:text-4xl">Latest Financial News</h2>
              </div>
              <p className="text-muted-foreground text-body">
                Stay informed with the latest market updates and analysis
              </p>
            </div>
            <Button variant="ghost" className="gap-2 hidden md:flex">
              View All News
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {financialNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button variant="ghost" className="gap-2">
              View All News
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-6 w-6" style={{ color: 'var(--color-finance-blue)' }} />
                <span className="text-xl font-bold" style={{ fontFamily: 'Commissioner, sans-serif' }}>
                  FinanceHub
                </span>
              </div>
              <p className="text-muted-foreground text-small max-w-md">
                Your trusted platform for real-time market data, stock analysis, and financial news. Make informed investment decisions with confidence.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3" style={{ fontFamily: 'Commissioner, sans-serif' }}>Quick Links</h3>
              <ul className="space-y-2 text-small text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Markets</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">News</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Research</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3" style={{ fontFamily: 'Commissioner, sans-serif' }}>Company</h3>
              <ul className="space-y-2 text-small text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-small text-muted-foreground">
            <p>&copy; 2026 FinanceHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}