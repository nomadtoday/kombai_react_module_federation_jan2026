import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock } from 'lucide-react'
import { NewsItem } from '../types/stock'

interface NewsCardProps {
  news: NewsItem
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={news.imageUrl} 
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge 
          className="absolute top-3 right-3 capitalize"
          style={{
            backgroundColor: news.category === 'market' ? 'var(--color-accent-blue)' :
                           news.category === 'company' ? 'var(--color-finance-blue)' :
                           news.category === 'economy' ? 'var(--color-finance-teal)' :
                           '#ea580c',
            color: 'white'
          }}
        >
          {news.category}
        </Badge>
      </div>
      <CardContent className="p-5">
        <h3 className="font-semibold text-base mb-2 line-clamp-2 group-hover:text-(--accent-blue) transition-colors" style={{ fontFamily: 'Commissioner, sans-serif' }}>
          {news.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="font-medium">{news.source}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {news.publishedAt}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}