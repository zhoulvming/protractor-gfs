// page is non-angular
import BasePage from './basePage';

class GfsPage extends BasePage {
    constructor() {
        super();
        this.gfslink = element(by.name('gfslink'));

        this.url = 'http://localhost:4200/business/sample/list';
        this.pageLoaded = this.titleIs('ProtractorGfs');
    }



}
export default new GfsPage();
