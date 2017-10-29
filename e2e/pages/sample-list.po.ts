import { browser, by, element } from 'protractor';

export class SampleListPage {
  navigateTo() {
    return browser.get('/business/sample/list');
  }
}
