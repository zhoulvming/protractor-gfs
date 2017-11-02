import userData from '../data/userData';

import loginPage from '../pages/loginPage';
import homePage from '../pages/homePage';
import gfsPage from '../pages/gfsPage';

describe('gfs test', () => {
  beforeEach(() => {
    loginPage.goto();
  });



  it('search test', () => {
    loginPage.loginAs(userData.testUser);
    expect(homePage.loaded()).toBe(true);

    homePage.gotoGFS();
    homePage.switchToWindow(1, gfsPage);
    expect(gfsPage.loaded()).toBe(true);

    // get row&cell data from table


  });
});
