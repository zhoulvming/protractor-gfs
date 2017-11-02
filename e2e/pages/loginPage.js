// page is non-angular
// browser.ignoreSynchronization = true;
import BasePage from './basePage';

class LoginPage extends BasePage {
  constructor() {
    super();
    this.userInput = element(by.name('user'));
    this.passInput = element(by.name('pass'));
    this.loginButton = $('.login');

    this.url = 'http://localhost:8080/login.html';
    this.pageLoaded = this.titleIs('Login Page');
  }

  loginAs(userObj) {
    return this.login(userObj.username, userObj.password);
  }

  login(user, pass) {
    this.userInput.sendKeys(user);
    this.passInput.sendKeys(pass);
    return this.loginButton.click();
  }
}
export default new LoginPage();
