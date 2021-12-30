export class TrustAndSecure{

    navigate(){     
        cy.visit('https://dan.com/trust_and_security?utm_campaign=Parking&utm_medium=parking&utm_source=.com&utm_term=readmine.com');
    }
    get gotCookies()  {
       return cy.get('.button_to > .btn');

    }
    get buyDomain()  {
        return cy.get('.navbar-nav > :nth-child(1) > .nav-link');
     }
     get sellDomein()  {
        return cy.get('.navbar-nav > :nth-child(2) > .nav-link');
     }

    get learnDD()  {
        return cy.get('.navbar-nav > :nth-child(3) > .nav-link > .icon');
     }
     get companyDD()  {
        return cy.get('.navbar-nav > :nth-child(4) > .nav-link > .icon');
     }
    
    }
    module.exports = new TrustAndSecure()