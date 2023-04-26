describe('Anilist API', () => {
  it('should load anime by id', () => {
    cy.request({
      method: 'POST',
      url: 'https://graphql.anilist.co/',
      body: {
        query: `
          query ($id: Int!) {
            Media (id: $id, type: ANIME) {
              id
              title {
                romaji
              }
              description
            }
          }
        `,
        variables: {
          id: 16498,
        },
      },
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000,
      retryOnStatusCodeFailure: true,
    }).as('anilistAnimeQuery');

    cy.get('@anilistAnimeQuery').should((response: Cypress.Response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.Media.id).to.eq(16498);
      expect(response.body.data.Media.title.romaji).to.eq('Shingeki no Kyojin');
      expect(response.body.data.Media.description).to.include('Several hundred years ago');
    });
  });
});
