export class Billing{
   

    get firstNameField()  {
        return cy.get('#checkout_first_name');
     }
     enterFirstName(){
      this.firstNameField.type(this.generateRandomValue())
     }

     get lastNameField()  {
        return cy.get('#checkout_last_name');
     }
     enterLastName(){
      this.lastNameField.type(this.generateRandomValue())
     }
     

     get emailField()  {
        return   cy.get('#checkout_email');
     }
     get confirmEmailField()  {
      return cy.get('#checkout_confirmation_email');
   }
     
     enterEmailValue(){
        let emailValue = this.generateRandomEmail();

      this.emailField.type(emailValue);
      this.confirmEmailField.type(emailValue);
     }

     
     get phoneField()  {
        return cy.get('#checkout_phone');
     }
     enterPhoneValue(){
      this.phoneField.type(this.generateRandomPhoneNumber())
     }


     get countryField()  {
        return cy.get('#checkout_country_code');
     }
     enterCountryValue(){
      this.countryField.select('Ukraine')
     }


     get cityField()  {
        return cy.get('#checkout_city');
     }
     enterCityValue(){
      this.cityField.type(this.generateRandomValue())
     }



     get postcodeField()  {
        return cy.get('#checkout_zip');
     }
     enterPostcodeValue(){
      this.postcodeField.type(this.generateRandomPhoneNumber())
     }



     get adressField()  {
        return cy.get('#checkout_address');
     }
     enterAdressValue(){
      this.adressField.type(this.generateRandomValue())
     }





     get membershipYes()  {
        return cy.get('.checkout_buyer_type > :nth-child(3) > .collection_radio_buttons');
     }
     representsCompanyYes(){
      this.membershipYes.click()
     }


     get membershipNo()  {
       return cy.get('.checkout_buyer_type > :nth-child(4) > .collection_radio_buttons');
   }
   representsCompanyNo(){
      this.membershipNo.click()
     }
     representsCompanyNo(){
      this.membershipNo.click()
    }



     get companyField()  {
      return cy.get('#checkout_company');
  }
      enterCompanyValue(){
      this.companyField.type(this.generateRandomValue())
      }
     



     get termOfUseChb()  {
        return  cy.get('#checkout_accept_tos')
     }
     clickTermOfUseChb(){
      this.termOfUseChb.click({force: true})
     }


     
     get nextPageBtn()  {
       return cy.get('.text-right > .btn');
     }
     clickNextPageBtn(){
      this.nextPageBtn.click()
     }


    
    generateRandomValue()  {
      return Math.random().toString(32).substring(2, 15)
       
    }
   
   
    generateRandomEmail()  {
       return Math.random().toString(32).substring(2, 15)+'@gmail.com'
        
     }
    generateRandomPhoneNumber()  {
        return Math.floor(Math.random() * 100000000000000);
         
      }

      get nextBtn()  {
         return cy.get('.btn-success');
      }
      clickNextBtn(){
       this.nextBtn.click()
      }

      get aliPayChb()  {
         return cy.get('.adyen-checkout__payment-method--alipay > .adyen-checkout__payment-method__header > .adyen-checkout__payment-method__header__title > .adyen-checkout__payment-method__radio');
      }
      clickAliPayChb(){
       this.aliPayChb.click()
      }

      get ContinueAliPayBtn()  {
         return cy.get('.adyen-checkout__payment-method__details__content > .adyen-checkout__button > .adyen-checkout__button__content > .adyen-checkout__button__text');
      }
      clickContinueAliPay(){
       this.ContinueAliPayBtn.click()
      }


      get QrCodeLabel()  {
         return  cy.get('canvas');
      }
      assertTrueQrCodeLabelVisible(){
       this.QrCodeLabel.should('be.visible');
      }
      









    


}
module.exports = new Billing()