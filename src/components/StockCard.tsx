import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { Stock } from '../types/stock'

interface StockCardProps {
  stock: Stock
}

export default function StockCard({ stock }: StockCardProps) {
  const isPositive = stock.change > 0

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Commissioner, sans-serif' }}>
              {stock.symbol}
            </h3>
            <p className="text-sm text-muted-foreground">{stock.name}</p>
          </div>
          <Badge 
            variant={isPositive ? 'default' : 'destructive'}
            className="gap-1"
            style={isPositive ? {
              backgroundColor: 'var(--color-bull-green)',
              color: 'white'
            } : {
              backgroundColor: 'var(--color-bear-red)',
              color: 'white'
            }}
          >
            {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%
          </Badge>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-2xl font-bold" style={{ fontFamily: 'Commissioner, sans-serif' }}>
              ${stock.price.toFixed(2)}
            </p>
            <p 
              className="text-sm font-medium"
              style={{ color: isPositive ? 'var(--color-bull-green)' : 'var(--color-bear-red)' }}
            >
              {isPositive ? '+' : ''}{stock.change.toFixed(2)} today
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-3 border-t">
            <div>
              <p className="text-xs text-muted-foreground">Volume</p>
              <p className="text-sm font-medium">{stock.volume}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Market Cap</p>
              <p className="text-sm font-medium">{stock.marketCap}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}