Feature('Login');

Scenario('Login com sucesso',  ({ I }) => {

I.amOnPage('http://automationpratice.com.br/')
I.click('Login');
I.waitForText('Login', 4)
I.fillField('#user','leobatista@gmail.com');
I.fillField('#password', '123456');
I.click('#btnLogin');
I.waitForText('Login realizado',3)
})//.tag('@sucesso')

Scenario('Login com falha - somente email',  ({ I }) => {

  I.amOnPage('http://automationpratice.com.br/')
  I.click('Login');
  I.waitForText('Login', 4)
  I.fillField('#user', 'leobatista@gmail.com');
  I.click('#btnLogin') 
  I.waitForText('Senha inválida.',3)
  })

Scenario('Login com falha - somente senha',  ({ I }) => {

  I.amOnPage('http://automationpratice.com.br/')
  I.click('Login');  
  I.waitForText('Login', 4)
  I.fillField('#password', '123456');  
  I.click('#btnLogin') 
  I.waitForText('E-mail inválido.',3)
  })

Scenario('Login com falha - login vazio',  ({ I }) => {

  I.amOnPage('http://automationpratice.com.br/')
  I.click('Login');  
  I.waitForText('Login', 4)
  I.click('#btnLogin')  
})