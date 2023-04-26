export type AnimeByIdStub = {
  data: {
    Media: {
      id: number;
      title: {
        romaji: string;
      };
      description: string;
    };
  };
};

export const ANIME_BY_ID_STUB: AnimeByIdStub = {
  data: {
    Media: {
      id: 16498,
      title: {
        romaji: 'Shingeki no Kyojin',
      },
      description: 'Several hundred years ago, humans were nearly exterminated by titans.',
    },
  },
};
