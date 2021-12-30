export class Main{

get nextBtn()  {
   return cy.get('.next-button > .purchaseAction');
}
clickNextBtn(){
   this.nextBtn.click({force: true})
  }
get howItWorksBtn()  {
    return cy.get('.col > .button-secondary');
 }
 howItWorksBtnClick(){     
   this.howItWorksBtn.click();
}

 get trustAndSecurityBtn()  {
    return cy.get('.modal-body > :nth-child(3) > a');
 }
 trustAndSecurityBtnClick(){     
   this.trustAndSecurityBtn.click();
}

 navigateMainPage(){     
   cy.visit('http://readmine.com/');
}






}
module.exports = new Main()