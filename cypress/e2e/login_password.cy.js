
describe('Форма логина', function () {
    
    it('1.1 Проверка при вводе правильного логина и правильного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
    	cy.get('#loginButton').should('be.enabled');
    	cy.get('#loginButton').click();
    	cy.contains('Авторизация прошла успешно');
    	cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('1.2 Проверка восстановления пароля кнопкой «Забыли пароль»', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
   	    cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
    	cy.contains('Успешно отправили пароль на e-mail');
    	cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('1.3 Проверка при вводе правильного логина и неправильного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio2');
    	cy.get('#loginButton').should('be.enabled');
    	cy.get('#loginButton').click();
    	cy.contains('Такого логина или пароля нет');
    	cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('1.4 Проверка при вводе неправильного логина и правильного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikos.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
    	cy.get('#loginButton').should('be.enabled');
    	cy.get('#loginButton').click();
    	cy.contains('Такого логина или пароля нет');
    	cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('1.5 Проверка наличия @ в поле логин с правильным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
    	cy.get('#loginButton').should('be.enabled');
    	cy.get('#loginButton').click();
    	cy.contains('Нужно исправить проблему валидации');
    	cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    }) 

    it('1.6 Проверка на приведение к строчным буквам в поле логина с правильным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
    	cy.get('#loginButton').should('be.enabled');
    	cy.get('#loginButton').click();
    	cy.contains('Авторизация прошла успешно');
    	cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})

