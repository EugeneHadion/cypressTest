///// <reference types="cypress" />
const mainPage = require('../pages/main.page.js')
const billingPage = require('../pages/billing.page.js')
const trustAndSecurePage = require('../pages/trustAndSecure.page.js')
const newsPage = require('../pages/news.page.js')

describe('Testing Redmine', () => {
  

    xit('billing page1', () => {

      mainPage.navigateMainPage();
      mainPage.clickNextBtn();
      billingPage.enterFirstName();
      billingPage.enterLastName();
      billingPage.enterEmailValue()
      billingPage.enterPhoneValue();
      billingPage.enterCountryValue();
      billingPage.enterCityValue();
      billingPage.enterPostcodeValue();
      billingPage.enterAdressValue();
      billingPage.representsCompanyYes();
      billingPage.representsCompanyYes();
      billingPage.enterCompanyValue();
      billingPage.clickTermOfUseChb()
      billingPage.clickNextPageBtn();
      billingPage.clickNextBtn()
      billingPage.clickAliPayChb()
      billingPage.clickContinueAliPay()
      billingPage.assertTrueQrCodeLabelVisible();

    })
    xit('how it works', () => {
      mainPage.navigateMainPage();
      mainPage.howItWorksBtnClick();
      mainPage.trustAndSecurityBtnClick();

    })

    xit('trustAndSecurePage', () => {
      trustAndSecurePage.navigateTrustAndSecurePage();
      trustAndSecurePage.gotCookiesBtnClick();
      trustAndSecurePage.learnDDLClick()
      trustAndSecurePage.learnDdlNewsBtnClick()
      
    })

    it('newsPage', () => {
      newsPage.navigateNewsPage();
      newsPage.hoverHeaderNewsDropdown();
      cy.get('.container > .category-list').should('be.visible')
      // newsPage.hoverToReadArticleBtn()//do not working
      // cy.get('.article-section__text-holder > .c-btn').trigger('mouseover')
      // newsPage.hoverToMediaAssertBtn()
      // newsPage.companyNewsMenuHover()

      
      
    })






  })