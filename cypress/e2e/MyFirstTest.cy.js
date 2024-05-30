describe("My first test", () => {
    it('verify the title', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', "OrangeHRM") // eq use for equals method for assersion
        cy.get("[name='username']").type('Admin{enter}');
        cy.get("[name='password']").type('admin123'); // to enter value in textbox or input box
        cy.get(".orangehrm-login-button").click({ force: true });
        cy.get(".oxd-topbar-header-hamburger").should('exist'); // if present in dom
       // cy.get(".oxd-topbar-header-hamburger").click();
        cy.xpath("href=' / web / index.php / pim / viewPimModule'")
            .then(($0) => { return $0.text() })
            .as('PIM')
    })
    it('verify the title', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', "OrangeHRM124")
    })
})