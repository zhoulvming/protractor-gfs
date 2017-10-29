import { browser } from 'protractor';

import { HomePage } from './pages/home.po';
import { SampleListPage } from './pages/sample-list.po';

describe('protractor-gfs App', () => {
  let homePage: HomePage;
  let sampleListPage: SampleListPage;

  beforeEach(() => {
    homePage = new HomePage();
    sampleListPage = new SampleListPage();
  });

  it('should display home page', () => {
    browser.driver.manage().window().maximize();
    homePage.navigateTo();
  });

  it('should display sample list page', () => {
    sampleListPage.navigateTo();
  });
});
