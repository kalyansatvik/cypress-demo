//describe
//it
describe('main block',()=>{
    it.skip('Validate landing page',()=>{
        cy.visit('/')
        cy.contains('Welcome to the-internet').should('be.visible')
    })

    it.skip('Validate drag and drop page',()=>{
        cy.visit('/drag_and_drop')
        cy.contains('Welcome to the-internet').should('be.visible')
    })

    it('Validate landing page',()=>{
        cy.visit('/')
        cy.contains('Welcome to the-internet').should('be.visible')
        cy.contains('Drag and Drop').click()
        cy.contains('Welcome to the-internet').should('not.be.visible')
        cy.go('back') // cy.go(-1)
        cy.contains('Welcome to the-internet').should('be.visible')
        cy.go('forward') // cy.go(1)
        cy.contains('Welcome to the-internet').should('not.be.visible')
    })


})