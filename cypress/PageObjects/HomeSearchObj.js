class home{

    HomeSearch(Dashboard_Search)
    {
        cy.xpath("//input[@placeholder='Search']").type(Dashboard_Search)
        cy.get('button.input-group-text').click()
    }
}
export default home;