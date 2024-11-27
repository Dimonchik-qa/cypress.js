describe('Автотесты формы логина и пароля', function () {

    it('1.Позитивный кейс', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();         
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
     it('2.Восстановление пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('3.Неправильный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('15678');
        cy.get('#loginButton').click();         
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('4.Неправильный логин и пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('dsfs@ddfdv.ru');
        cy.get('#pass').type('15678');
        cy.get('#loginButton').click();         
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('5.Проверка без @', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    })
    it('6.Проверка регистра', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
 }) 
