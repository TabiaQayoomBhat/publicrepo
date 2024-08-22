import Login from "../PageObjects/LoginPageObj"
import PubAssmnt from "../PageObjects/PubAssmntObj";

describe('pom', () => {
    it('Published Assessmnt Preview', () =>{
     
       const ln= new Login();
       cy.fixture("mcq.json").then((data)=>{
           ln.completeLogin(data.url,data.email,data.password)
           
        })
        const publish= new PubAssmnt()
        cy.fixture("mcq.json").then((data)=>{
        
        publish.pubassmnt_Icon();
        publish.pubassmnt_Preview()
        })

    })

    it('Published Assessmnt Analyze', () =>{
     
        const ln= new Login();
        cy.fixture("mcq.json").then((data)=>{
            ln.completeLogin(data.url,data.email,data.password)
            
         })
         const publish= new PubAssmnt()
         cy.fixture("mcq.json").then((data)=>{
         
         publish.pubassmnt_Icon();
         publish.pubassmnt_Analyze()
          
         })
 
     })
    
     it('Published Assessmnt ShareAssmnt', () =>{
     
        const ln= new Login();
        cy.fixture("mcq.json").then((data)=>{
            ln.completeLogin(data.url,data.email,data.password)
            
         })
         const publish= new PubAssmnt()
         cy.fixture("mcq.json").then((data)=>{
         
         publish.pubassmnt_Icon();
         publish.pubassmnt_ShareAssmnt()
          
         })
 
     })

     it('Published Assessmnt CopyLink', () =>{
     
        const ln= new Login();
        cy.fixture("mcq.json").then((data)=>{
            ln.completeLogin(data.url,data.email,data.password)
            
         })
         const publish= new PubAssmnt()
         cy.fixture("mcq.json").then((data)=>{
         
         publish.pubassmnt_Icon();
         publish.pubassmnt_CopyLink()
          
         })
 
     })

})