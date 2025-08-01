describe('Teste da Requisição', () => {
  let endpoint;

  before(() => {
    // Defina dinamicamente o endpoint a ser utilizado
    endpoint = 'URL_endpoint';
  });


  it('Deve fazer uma requisição GET para a API', () => {
    cy.request({
      method: 'GET',
      url: 'URL_endpoint',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "token"
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200); 
    });
  });


  it('Deve fazer uma requisição PUT/POST para a API', () => {
    cy.request({
      method: 'POST',
      url: 'URL_endpoint',
      body: {

        "dado_A": "dado_dinamico",
        "dado_B": "dado_dinamico",
        "dado_C": "dado_dinamico",
        "dado_D": "dado_dinamico"
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "token"

      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });


});