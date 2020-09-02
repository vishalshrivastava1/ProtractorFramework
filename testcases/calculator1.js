let homepage = require('../pages/homepage')

describe('Demo calculator tests', function () {
    it('addition test', function () {

        homepage.get("http://juliemr.github.io/protractor-demo/");

        homepage.enterFirstNumber('2');
        homepage.enterSecondNumber('3');
        homepage.clickGo();

        homepage.verifyResult('5')
        browser.sleep(2000);

    });

    it('substraction test', function () {

        homepage.get("http://juliemr.github.io/protractor-demo/");

        homepage.enterFirstNumber('5');
        homepage.enterSecondNumber('2');
        homepage.clickGo();

        homepage.verifyResult('7')
        browser.sleep(2000);

    });

});

