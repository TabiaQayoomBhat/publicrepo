class Delete{

    Delete_Assmnt(Renamed_Assessment)
    {
        cy.xpath("/html[1]/body[1]/app-root[1]/main-layout-component[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/app-my-layout[1]/mat-drawer-container[1]/mat-drawer-content[1]/app-teacher-dashboard[1]/div[1]/div[1]/div[2]/app-main-dashboard[1]/cdk-virtual-scroll-viewport[1]/div[1]/mat-card[1]/mat-card-content[1]/div[1]/div[1]/div[1]/div[2]/div[4]/span[1]/span[1]/i[1]").click()
        cy.get('.menu-items > :nth-child(3)').click()
        cy.get('.button').click()
    }
}
export default Delete;