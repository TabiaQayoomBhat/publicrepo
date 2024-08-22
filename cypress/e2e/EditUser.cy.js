import Login from "../PageObjects/LoginPageObj"
import AddUser from "../PageObjects/UserObj"
describe('pom', () => {
    it('Update user', () =>{
      // cy.visit('https://testassessment.educian.com')
       
       const ln= new Login();
       cy.fixture("mcq.json").then((data)=>{
           ln.completeLogin(data.url,data.email,data.password)
           
        })
        const adduser= new AddUser();
        cy.fixture("mcq.json").then((data)=>{
            adduser.userIcon(),
            adduser.edit_user(),
           // adduser.addUser_btn(),
            adduser.clr_field(),
            adduser.fname(data.user_Fname),
            // adduser.lname(data.user_Lname),
            // adduser.userEmail(data.user_Email),
            // adduser.role(),
            // adduser.userPwd(data.user_Password),
            // adduser.assignAssmnt(),
            adduser.user_update()

        })
 

    })
})