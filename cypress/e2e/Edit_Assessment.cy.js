import Login from "../PageObjects/LoginPageObj"
import editAssmnt from"../PageObjects/EditAssmntObj"

describe('pom', () => {
    it('Edit Assessment', () =>{
     
       const ln= new Login();
       cy.fixture("mcq.json").then((data)=>{
           ln.completeLogin(data.url,data.email,data.password)
           
        })
        const edit= new editAssmnt()
        cy.fixture("mcq.json").then((data)=>{
         
         edit.edit_assmnt();

        })

    })
})