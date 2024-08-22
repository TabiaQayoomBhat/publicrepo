import Login from "../PageObjects/LoginPageObj"
import suborgg from "../PageObjects/SuborgObj"
describe('pom', () => {
    it.only('Add Sub Organization', () =>{
      // cy.visit('https://testassessment.educian.com')
       
       const ln= new Login();
       cy.fixture("mcq.json").then((data)=>{
           ln.completeLogin(data.url,data.email,data.password)
           
        })
        const suborgz =new suborgg()
        cy.fixture("mcq.json").then((data)=>{
            suborgz.Icon_SubOrg(),
            suborgz.Add_SubOrg(data.SubOrg_Email,data.SubOrg_Name,data.SubOrg_Password)
        }) 
    })


    describe('pom', () => {
        it('View Sub Organization', () =>{
          // cy.visit('https://testassessment.educian.com')
           
           const ln= new Login();
           cy.fixture("mcq.json").then((data)=>{
               ln.completeLogin(data.url,data.email,data.password)
               
            })
            const suborgz =new suborgg()
            cy.fixture("mcq.json").then((data)=>{
                suborgz.Icon_SubOrg(),
                suborgz.View_SubOrg()
            }) 
        })
    })

    describe('pom', () => {
        it('Rename Sub Organization', () =>{
          // cy.visit('https://testassessment.educian.com')
           
           const ln= new Login();
           cy.fixture("mcq.json").then((data)=>{
               ln.completeLogin(data.url,data.email,data.password)
               
            })
            const suborgz =new suborgg()
            cy.fixture("mcq.json").then((data)=>{
                suborgz.Icon_SubOrg(),
                suborgz.Edit_Icon(),
                suborgz.Clear_OrgName(),
                suborgz.Edit_SubOrg(data.SubOrg_Rename)
            }) 
        })
    })

    describe('pom', () => {
        it('Delete Sub Organization', () =>{
          // cy.visit('https://testassessment.educian.com')
           
           const ln= new Login();
           cy.fixture("mcq.json").then((data)=>{
               ln.completeLogin(data.url,data.email,data.password)
               
            })
            const suborgz =new suborgg()
            cy.fixture("mcq.json").then((data)=>{
                suborgz.Icon_SubOrg(),
                suborgz.Delete_SubOrg()
            }) 
        })
    })
})
