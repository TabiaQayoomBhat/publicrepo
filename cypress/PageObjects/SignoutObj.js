class signout{

    logout()
    {
        cy.get('.desktop-only > #navbarDropdown > .mt-3').click()
        cy.get('.desktop-only > .dropdown-menu > .p-3 > :nth-child(2)').click()
    }
}

export default signout;