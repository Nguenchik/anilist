export interface Anime {
  id: number
  title: {
    romaji: string
    english?: string
    native: string
  }
  type: string
  format: string
  description: string
  startDate: {
    year?: number
    month?: number
    day?: number
  }
  endDate: {
    year?: number
    month?: number
    day?: number
  }
  seasonYear?: number
  season?: string
  episodes?: number
  duration?: number
  status: 'FINISHED' | 'RELEASING' | 'NOT_YET_RELEASED' | 'CANCELLED' | 'HIATUS'
  averageScore: number
  coverImage: {
    extraLarge: string
    large: string
    medium: string
    color: string
  }
}
