import { Stock, NewsItem } from '../types/stock'

export const topStocks: Stock[] = [
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    price: 875.42,
    change: 45.32,
    changePercent: 5.46,
    volume: '52.3M',
    marketCap: '$2.15T'
  },
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 185.64,
    change: 3.28,
    changePercent: 1.80,
    volume: '68.9M',
    marketCap: '$2.91T'
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 378.91,
    change: 6.54,
    changePercent: 1.76,
    volume: '31.2M',
    marketCap: '$2.82T'
  },
  {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    price: 248.33,
    change: 12.87,
    changePercent: 5.47,
    volume: '95.4M',
    marketCap: '$789.2B'
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 152.78,
    change: 2.45,
    changePercent: 1.63,
    volume: '42.7M',
    marketCap: '$1.58T'
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 141.23,
    change: 1.89,
    changePercent: 1.36,
    volume: '28.5M',
    marketCap: '$1.77T'
  }
]

export const financialNews: NewsItem[] = [
  {
    id: '1',
    title: 'Federal Reserve Signals Potential Interest Rate Cuts in 2026',
    source: 'Financial Times',
    publishedAt: '2 hours ago',
    url: '#',
    imageUrl: 'https://picsum.photos/400/250?random=1',
    category: 'economy'
  },
  {
    id: '2',
    title: 'Tech Stocks Rally as AI Investment Surges to Record Highs',
    source: 'Bloomberg',
    publishedAt: '4 hours ago',
    url: '#',
    imageUrl: 'https://picsum.photos/400/250?random=2',
    category: 'market'
  },
  {
    id: '3',
    title: 'NVIDIA Announces New AI Chip, Stock Jumps 5%',
    source: 'Reuters',
    publishedAt: '5 hours ago',
    url: '#',
    imageUrl: 'https://picsum.photos/400/250?random=3',
    category: 'company'
  },
  {
    id: '4',
    title: 'Global Markets See Strong Start to 2026 Trading',
    source: 'CNBC',
    publishedAt: '6 hours ago',
    url: '#',
    imageUrl: 'https://picsum.photos/400/250?random=4',
    category: 'market'
  },
  {
    id: '5',
    title: 'Bitcoin Reaches New All-Time High Above $120,000',
    source: 'CoinDesk',
    publishedAt: '8 hours ago',
    url: '#',
    imageUrl: 'https://picsum.photos/400/250?random=5',
    category: 'crypto'
  },
  {
    id: '6',
    title: 'Major Banks Report Strong Q4 Earnings, Beat Expectations',
    source: 'Wall Street Journal',
    publishedAt: '10 hours ago',
    url: '#',
    imageUrl: 'https://picsum.photos/400/250?random=6',
    category: 'company'
  }
]