describe('main block',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    // after(()=>{
    //     cy.clearLocalStorage()
    //     cy.clearCookies()
    // })
    it('Validate landing page',()=>{
        cy.contains('Welcome to the-internet').should('be.visible')
    })

    it('Checkboxes',()=>{
        cy.contains('Checkboxes').click()
        cy.get('input[type=checkbox]').eq(0).check()
        cy.get('input[type=checkbox]').eq(1).uncheck()

    })

    it('Dropdown',()=>{
        cy.contains('Dropdown').click()
        cy.get('select > option').its('length').should('eq', 3)
        cy.get('select > option').should('have.length', 3)
        cy.get('select[id=dropdown]').select('Option 1')
        cy.get('select > option').eq(1).should('have.text', 'Option 1')
    
        cy.get('select > option').eq(1).should('have.text', 'Option 1')     

    })

    it.only('Add/Remove Elements',()=>{

        cy.contains('Add/Remove Elements').click()

        cy.contains('Add Element').should('be.visible').click()

        //cy.wait(50000)

        cy.get('div[id=elements] button',{timeout:50000}).should('be.visible')

        cy.contains('Delete').should('be.visible').click()

        cy.get('div[id=elements] button').should('not.be.visible')
    })

})