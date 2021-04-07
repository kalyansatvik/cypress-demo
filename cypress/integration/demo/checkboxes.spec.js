describe('Tool QA',()=>{
    it('Validate Checkbox page',()=>{
        //go to tool qa homepage
        //click on checkboxes link
        //validate checkboxes page
        //click on expand button
        //validate page after expand


        //go to tool qa homepage
        cy.visit('/elements')

        //click on checkboxes link
        cy.contains('Check Box').click()
        //cy.get('ul li span').contains('Check Box').click()

        //v
        cy.get('#tree-node-home').check({force:true})
        cy.contains('home').should('be.visible')
        cy.get('#tree-node-home').should('be.checked').uncheck({force:true})
        cy.contains('home').should('not.be.visible')
       
        //click on expand button
        cy.get('button[title=Toggle]').click()

        cy.get('button[title=Toggle]').its('length').should('eq', 4)

        //collapse toggle
        cy.get('button[title=Toggle]').eq(0).click()

        cy.get('button[title=Toggle]').its('length').should('eq', 1)

    })
})