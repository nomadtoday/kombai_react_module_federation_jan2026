export interface Stock {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  volume: string
  marketCap: string
}

export interface NewsItem {
  id: string
  title: string
  source: string
  publishedAt: string
  url: string
  imageUrl: string
  category: 'market' | 'company' | 'economy' | 'crypto'
}