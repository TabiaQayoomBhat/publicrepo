class stng
{
    stng_Icon()
    {
        cy.get(':nth-child(7) > .nav-link > span').click()
    }

    change_OrgName(Setting_OrgName)
    {
        cy.xpath("/html[1]/body[1]/app-root[1]/main-layout-component[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/app-my-layout[1]/mat-drawer-container[1]/mat-drawer-content[1]/app-settings[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/input[1]").type(Setting_OrgName)
        cy.get('.btn').click()
    }
     
    change_Password(Old_Password,New_Password,Confirm_Password)
    {
        cy.get('.nav > :nth-child(2) > a').click()
        cy.get('#mat-input-5').type(Old_Password)
        cy.get('#mat-input-6').type(New_Password)
        cy.get('#mat-input-7').type(Confirm_Password)
        cy.get('.btn').click()
        
    }
}
export default stng;