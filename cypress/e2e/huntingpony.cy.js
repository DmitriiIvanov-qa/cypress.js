
describe('Один длинный автотест для [HuntingPony]', function () {
    
    it('Оформление заказа в корзине', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[href="https://huntingpony.com/collection/povodki"] > .img-ratio_cover > :nth-child(1) > .img-ratio > .img-ratio__inner > picture > .loaded').click();
        cy.get('[data-product-id="338933807"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.wait(2000)
        cy.get('.add-cart-counter__btn-label').click();
        cy.wait(2000)        
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.header__cart > .icon').click();
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа');
    })
})