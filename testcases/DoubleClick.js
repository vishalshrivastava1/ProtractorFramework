describe("musuite",function(){

    it("doubleclick",function(){

        browser.waitForAngularEnabled(false);
        browser.get("http://testautomationpractice.blogspot.com/");
        browser.manage().window().maximize();
        browser.sleep(3000);

        var button = element(by.xpath("//button[contains(text(),'Copy Text')]"));
        
        //1st aproach
        //browser.actions().mouseMove(button).doubleClick().perform();
        //browser.sleep(3000);

        //2nd aproach
        browser.actions().doubleClick(button).perform();
        browser.sleep(3000);


    })


})