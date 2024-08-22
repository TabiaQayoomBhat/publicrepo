import Login from "../PageObjects/LoginPageObj"
import Groups from "../PageObjects/GroupsObj";
describe('pom', () => {
    it('Rename Group', () =>{
      // cy.visit('https://testassessment.educian.com')
       
       const ln= new Login();
       cy.fixture("mcq.json").then((data)=>{
           ln.completeLogin(data.url,data.email,data.password)
           
        })
        const addgroup= new Groups();
        cy.fixture("mcq.json").then((data)=>{
         
         addgroup.Group_Icon()
         addgroup.Edit_GroupName()
         addgroup.Clear_GroupField()
         addgroup.Update_GroupName(data.Update_Gname)

        })
 

    })
})