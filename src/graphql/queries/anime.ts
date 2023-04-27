import { gql } from '@apollo/client'

export const ANIME_INFO = gql`
  query ($searchTerm: String) {
    Media(search: $searchTerm, type: ANIME) {
      id
      title {
        romaji
      }
      description
      status
      averageScore
      startDate {
        year
        month
      }
      endDate {
        year
        month
      }
      coverImage {
        large
      }
    }
  }
`
