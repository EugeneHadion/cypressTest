export class News{

    navigateNewsPage(){     
        cy.visit('https://news.dan.com/');
    }

    get headerNewsDropdown()  {
      return cy.get('.main-nav__item--news > .main-nav__link');
   }
   // get newsDd()  {
   //    return cy.get('.main-nav__dropdown');
   // }
   
    hoverHeaderNewsDropdown(){
      cy.get('.main-nav__item--news > .main-nav__link').trigger('mousemove', { clientX: 20, clientY: 30 }); //do not working
       
      }

    get readArticleBtn()  {
       return cy.get('.article-section__text-holder > .c-btn');
    }
    
     hoverToReadArticleBtn(){
        this.readArticleBtn.trigger('mouseover') //do not working
        
       }



       get mediaAssertBtn()  {
         return cy.get('.viewport-section > .press__list > :nth-child(1) > .press__link');
      }
      
       hoverToMediaAssertBtn(){
          this.mediaAssertBtn.trigger('mouseover')  //do not working
          
         }


         
       get companyNewsMenu()  {
         return cy.get(':nth-child(2) > .c-tabset__link');
      }
      
       companyNewsMenuHover(){
          this.companyNewsMenu.trigger('mouseover')  //do not working
          
         }





    
    }
    module.exports = new News()