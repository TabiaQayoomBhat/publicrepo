import Login from "../PageObjects/LoginPageObj"
import AddUser from "../PageObjects/UserObj"
describe('pom', () => {
    it('Delete User', () =>{
      // cy.visit('https://testassessment.educian.com')
       
       const ln= new Login();
       cy.fixture("mcq.json").then((data)=>{
           ln.completeLogin(data.url,data.email,data.password)
           
        })
        const adduser= new AddUser();
        cy.fixture("mcq.json").then((data)=>{
            adduser.userIcon(),
           adduser.delete_user();

        })
 

    })
})