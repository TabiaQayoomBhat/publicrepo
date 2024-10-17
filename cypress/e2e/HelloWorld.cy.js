describe('Test', () => {
     it('Assert Text', () =>{
      cy.visit('http://host.docker.internal:8080') //Hit the URL


        cy.get('h1').should('have.text','Hello, World!') //check if same message is diplayed 
        
        
     })
})
