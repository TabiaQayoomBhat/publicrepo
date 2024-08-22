class suborgg
{
    Icon_SubOrg()
    {
        cy.get(':nth-child(6) > .nav-link > .rt').click()
        
    }

    Add_SubOrg(SubOrg_Email,SubOrg_Name,SubOrg_Password)
    {
        cy.xpath("/html[1]/body[1]/app-root[1]/main-layout-component[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/app-my-layout[1]/mat-drawer-container[1]/mat-drawer-content[1]/app-sub-organization[1]/div[1]/mat-card[1]/mat-card-content[1]/div[1]/div[2]/span[1]/button[1]").click()
        cy.get('#mat-input-5').type(SubOrg_Email)
        cy.get('#mat-input-6').type(SubOrg_Name)
        cy.get('.mat-select-arrow').click()
        cy.get('.mat-option-text').click()
        cy.get('#mat-input-8').type(SubOrg_Password)
        cy.get('.save').click()
    }
    

    View_SubOrg()
    {
        cy.xpath("/html[1]/body[1]/app-root[1]/main-layout-component[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/app-my-layout[1]/mat-drawer-container[1]/mat-drawer-content[1]/app-sub-organization[1]/div[1]/mat-card[1]/mat-card-content[1]/div[2]/table[1]/tbody[1]/mat-row[1]/td[5]/span[2]/i[1]").click()
    }

    Edit_Icon()
    {
        cy.get(':nth-child(3) > .ml-2 > :nth-child(3) > .mat-tooltip-trigger').click()
    }
   
    Clear_OrgName()
    {
        cy.get('#mat-input-6').clear()
    }


    Edit_SubOrg(SubOrg_Rename)
    {
        cy.get('#mat-input-6').type(SubOrg_Rename)
        cy.get('.save').click()

    }

    Delete_SubOrg()
    {
        cy.get(':nth-child(3) > .ml-2 > :nth-child(5) > .mat-tooltip-trigger').click()
        cy.get('.button').click()
    }
}
export default suborgg;
