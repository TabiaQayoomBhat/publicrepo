class PubAssmnt{

    pubassmnt_Icon()
    {
        cy.get(':nth-child(5) > .nav-link > .rt').click();
    }

    pubassmnt_Preview()
    {
        cy.get(':nth-child(1) > .btn > .btn_text_span').click();
        cy.get('.float-right > .btn').click()
    }

    pubassmnt_Analyze()
    {
        cy.get('.margin > .btn > .btn_text_span').click()
    }

    pubassmnt_ShareAssmnt()
    {
        cy.get('.mat-menu-trigger > .btn_text_span').click()
        cy.get('.menu-items > :nth-child(1) > .fa').click();
    }

    pubassmnt_CopyLink()
    {
        cy.get('.mat-menu-trigger > .btn_text_span').click()
        cy.get('.menu-items > :nth-child(2) > .mat-tooltip-trigger').click();
    }
}

export default PubAssmnt;

