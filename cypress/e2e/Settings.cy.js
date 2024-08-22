import Login from "../PageObjects/LoginPageObj"
import stng from "../PageObjects/Settings_McqObj"
describe('pom', () => {
    it('Settings/Account', () =>{
     
       const ln= new Login();
       cy.fixture("mcq.json").then((data)=>{
           ln.completeLogin(data.url,data.email,data.password)
           
        })
        const setting =new stng();
        cy.fixture("mcq.json").then((data)=>{
            setting.stng_Icon(),
            setting.change_OrgName(data.Setting_OrgName)
        }) 
    })


    it.only('Settings/Password', () =>{
       
         const ln= new Login();
         cy.fixture("mcq.json").then((data)=>{
             ln.completeLogin(data.url,data.email,data.password)
             
          })
          const setting =new stng();
          cy.fixture("mcq.json").then((data)=>{
              setting.stng_Icon(),
              setting.change_Password(data.Old_Password,data.New_Password,data.Confirm_Password)
          }) 
      })
})


