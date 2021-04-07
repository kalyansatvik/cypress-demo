//describe
//it
describe('Web Elements',()=>{
    it('Validate landing page',()=>{
        cy.visit('/')
        cy.contains('Welcome to the-internet').should('be.visible')
    })

    it('Validate drag and drop page',()=>{
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

    it('Checkboxes',()=>{
        cy.visit('/checkboxes')

        cy.get('input[type=checkbox]').eq(0).check()
        cy.get('input[type=checkbox]').eq(1).uncheck()

    })

    it('Dropdown',()=>{
        cy.visit('/dropdown')
        
        cy.get('select > option').its('length').should('eq', 3)
        cy.get('select > option').should('have.length', 3)
        cy.get('select[id=dropdown]').select('Option 1')
        cy.get('select > option').eq(1).should('have.text', 'Option 1')
    
        cy.get('select > option').eq(1).should('have.text', 'Option 1')     

    })


})