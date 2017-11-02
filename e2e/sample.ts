import { browser, $} from 'protractor';

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
    homePage.navigateTo().then(function(){
      $('a#listLink').click().then(function(){
        browser.getCurrentUrl().then(function(val){
          console.log(val);
          $('input#name').sendKeys('111222').then(function(){
            $('input#name').getText().then(function(val1){
              console.log(val1);
            });
          });
        });
      });
    });
  });

});
