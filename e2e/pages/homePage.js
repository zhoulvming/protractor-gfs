// page is non-angular
// browser.ignoreSynchronization = true;
import BasePage from './basePage';

class HomePage extends BasePage {
    constructor() {
        super();
        this.gfslink = element(by.name('gfslink'));

        this.url = 'http://localhost:8080/home.html';
        this.pageLoaded = this.titleIs('Home Page');
    }


    gotoGFS() {
        return this.gfslink.click();
    }

}
export default new HomePage();
