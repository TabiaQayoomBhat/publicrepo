import Login from "../PageObjects/LoginPageObj"
import Delete from"../PageObjects/DeleteAssmntObj"

describe('pom', () => {
    it('Delete Assessment', () =>{
     
       const ln= new Login();
       cy.fixture("mcq.json").then((data)=>{
           ln.completeLogin(data.url,data.email,data.password)
           
        })
        const del= new Delete()
        cy.fixture("mcq.json").then((data)=>{
         
         del.Delete_Assmnt();

        })

    })
})