describe('Tool QA', () => {
    it('Validate test box', () => {
        cy.visit('/text-box')
        cy.get('input[id=userName]').type('james')
        cy.get('[id=userName]').type(' jones')
        cy.get('#userName').type(' jimmy')
        cy.get('form > div > div:nth-child(2) > input[id=userName]').type(' jack')
        cy.get('form input[id=userName]').type(' john')
    })
})