class dashboard{
    home()
    {
        cy.get('.pt-4 > .nav-link').click()
    }
    

    users()
    {
        cy.get(':nth-child(3) > .nav-link > .rt').click()
    }

    groups()
    {
        cy.get(':nth-child(4) > .nav-link').click()
    }

    pubAssessment()
    {
        cy.get(':nth-child(5) > .nav-link > .rt').click()
    }

    suborg()
    {
        cy.get(':nth-child(6) > .nav-link > .rt').click()
    }

    settings()
    {
        cy.get(':nth-child(7) > .nav-link > span').click()
    }
    topNav(clk)
    {
        cy.get('.desktop-only > #navbarDropdown > .mt-3').click()
    }

}
export default dashboard;