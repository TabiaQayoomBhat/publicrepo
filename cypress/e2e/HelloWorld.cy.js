describe('Test', () => {
     it('Assert Text', () =>{
        cy.visit('http://localhost:8080/')

        cy.get('h1').should('have.text','Hello, World!')
        
        
     })
})
