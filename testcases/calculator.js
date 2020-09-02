describe('Demo calculator tests', function()
{
    it('addition test',function()
    {
        browser.get("http://juliemr.github.io/protractor-demo/");

        element(by.model('first')).sendKeys("10");
        element(by.model('second')).sendKeys("20");
        element(by.css('[ng-click="doAddition()"]')).click();
        browser.sleep(2000);

        let result = element(by.cssContainingText('.ng-binding','30'))
        expect(result.getText()).toEqual('30');
        browser.sleep(2000);

    });

});