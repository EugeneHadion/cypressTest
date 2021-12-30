export class TrustAndSecure{

    navigateTrustAndSecurePage(){     
        cy.visit('https://dan.com/trust_and_security?utm_campaign=Parking&utm_medium=parking&utm_source=.com&utm_term=readmine.com');
    }
    get gotCookiesBtn()  {
       return cy.get('.button_to > .btn');
    }
    gotCookiesBtnClick(){
        this.gotCookiesBtn.click()
       }
//////////////////////////
    get buyDomain()  {
        return cy.get('.navbar-nav > :nth-child(1) > .nav-link');
     }
     get sellDomein()  {
        return cy.get('.navbar-nav > :nth-child(2) > .nav-link');
     }
////////////////////////////
    get learnDDL()  {
        return cy.get('.navbar-nav > :nth-child(3) > .nav-link > .icon');
     }
     learnDDLClick(){
        this.learnDDL.click()
       }
    //  get companyDDL()  {
    //     return cy.get('.navbar-nav > :nth-child(4) > .nav-link > .icon');
    //  }
    //  companyDDLClick(){
    //     this.companyDDL.click()
    //    }

    get learnDdlNewsBtn()  {
        return cy.get('.nav-item.show > .dropdown-menu > .menu > .row > :nth-child(1) > .menu-link');
     }
     learnDdlNewsBtnClick(){
        this.learnDdlNewsBtn.click()
       }




    
    }
    module.exports = new TrustAndSecure()