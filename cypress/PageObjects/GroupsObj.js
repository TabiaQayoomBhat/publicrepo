class Groups{
    
    Group_Icon()
    {
        cy.get(':nth-child(4) > .nav-link').click()
    }
    Add_Group(Group_Name)
    {
        cy.xpath("/html[1]/body[1]/app-root[1]/main-layout-component[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/app-my-layout[1]/mat-drawer-container[1]/mat-drawer-content[1]/app-group-profile[1]/div[1]/mat-card[1]/div[1]/div[2]/button[1]").click();
        cy.get('.input_q > .form-control').type(Group_Name)
        cy.get('.mat-dialog-actions > :nth-child(2)').click();
    }

    Edit_GroupName()
    {
        cy.get(':nth-child(1) > .mat-tooltip-trigger').click();
        

    }

    Clear_GroupField()
    {
        cy.get('.input_q > .form-control').clear();
    }

    Update_GroupName(Update_Gname)
    {
        cy.get('.input_q > .form-control').type(Update_Gname)
        cy.get('.btn-rename').click();
    }

    Active_InactiveGroup()
    {
        cy.xpath("/html[1]/body[1]/app-root[1]/main-layout-component[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/app-my-layout[1]/mat-drawer-container[1]/mat-drawer-content[1]/app-group-profile[1]/div[1]/mat-card[1]/mat-card-content[1]/mat-table[1]/mat-row[1]/td[4]/span[4]/mat-slide-toggle[1]/label[1]/span[1]/span[1]/span[1]").click()
    }

    Delete_Group()
    {
        cy.xpath("/html[1]/body[1]/app-root[1]/main-layout-component[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/app-my-layout[1]/mat-drawer-container[1]/mat-drawer-content[1]/app-group-profile[1]/div[1]/mat-card[1]/mat-card-content[1]/mat-table[1]/mat-row[1]/td[4]/span[3]/i[1]").click()
        cy.get('.button').click()
    }
}
export default Groups;