class AddUser{

    userIcon()
    {
        cy.get(':nth-child(3) > .nav-link > .rt').click()
    }

    addUser_btn()
    {
        cy.get('.btn').click();
    }

    fname(user_Fname)
    {
        cy.get('#mat-input-5').type(user_Fname);
    }
    
    lname(user_Lname)
    {
        cy.get('#mat-input-6').type(user_Lname);
    }

    userEmail(user_Email)
    {
        cy.get('#emailAddress').type(user_Email);
    }

    role()
    {
        cy.get('.mat-select-arrow-wrapper').click();
        cy.get('.mat-option-text').click();
    }

    userPwd(user_Password)
    {
        cy.get('#mat-input-9').type(user_Password);
    }

    // assignAssmnt()
    // {
    //     cy.get('.col-8 > .btn').click();
    //     cy.get('.cursor').click();
    //     cy.get('.mb-3 > .mat-icon').click();
    //     cy.get('.ml-auto > .button').click();
    // }

    saveBtn()
    {
        cy.get('.save').click();
    }

    cancelBtn()
    {
        cy.get('.cancel').click();
    }

    user_update()
    {
        cy.get('.save').click();
    }

    edit_user()
    {
        cy.get(':nth-child(2) > .ml-2 > :nth-child(1) > .mat-tooltip-trigger').click();
    }

    clr_field()
    {
        cy.get('#mat-input-5').clear();
    }

    search_user(user_search)
    {
        cy.get('.form-control').type(user_search)
    }

    delete_user()
    {
        cy.get(':nth-child(2) > .ml-2 > :nth-child(2) > .mat-tooltip-trigger').click();
        cy.get('.button').click();
    }

    active_inactiveUser()
    {
        cy.xpath('/html[1]/body[1]/app-root[1]/main-layout-component[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/app-my-layout[1]/mat-drawer-container[1]/mat-drawer-content[1]/app-add-users-page[1]/div[1]/mat-card[1]/mat-card-content[1]/mat-table[1]/mat-row[1]/td[6]/span[3]/mat-slide-toggle[1]/label[1]/span[1]').click();
    }
}
export default AddUser;