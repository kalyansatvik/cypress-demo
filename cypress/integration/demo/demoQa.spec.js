describe('CSS Selector',()=>{
    it('CSS',()=>{
        cy.visit('https://demoqa.com/text-box')
        cy.get('input[id=userName]').type('kalyan')
        cy.get('#userName').type('kalyan')
        //cy.get('input[id=userName]').type('kalyan')
        cy.get('form > div > div:nth-child(2) > #userName').clear().type('Satvik')
        cy.get('form #userName').type(' UnClear')
    })
})