describe("mysuit", function(){

    it("non angular test", function(){
                
        //browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization =true;

        browser.get("http://demowebshop.tricentis.com/");
        browser.manage().window().maximize();
        element(by.id('small-searchterms')).sendKeys("14.1-inch Laptop");
        element(by.css("input[value=Search]")).click();
        browser.sleep(5000);

       expect(element(by.css("img[alt='Picture of 14.1-inch Laptop']")).isPresent()).toBe(true);
   
    })
  

});