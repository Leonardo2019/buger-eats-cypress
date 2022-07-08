/// <reference types="cypress" />

describe('Buger APP', ()=> {
    beforeEach(() => {
        
        cy.visit('/')
    })

    it('Acessar home', ()=>{
        cy.title().should('be.equal', 'Buger Eats')
        cy.get('#page-home main h1 ').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})