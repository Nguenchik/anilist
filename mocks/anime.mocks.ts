import type { Anime } from '@/types/anime';

export const mockAnime: Anime[] = [
  {
    id: 1,
    title: {
      userPreferred: 'Naruto',
    },
    startDate: {
      year: 2002,
      month: 10,
      day: 3,
    },
    endDate: {
      year: 2007,
      month: 2,
      day: 8,
    },
    description: 'A popular anime about ninjas.',
    averageScore: 85,
    coverImage: {
      medium: 'https://example.com/naruto.jpg',
    },
  },
];
  
  export const animeErrorResponse = {
    errors: [
      {
        message: 'Validation error: Cannot query field "invalidField" on type "Media".',
      },
    ],
  };