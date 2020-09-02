describe("testsuite",function(){

it("frameTest",function()
{

    //browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization =true;

    browser.get("https://www.selenium.dev/selenium/docs/api/java/index");
    browser.manage().window().maximize();

    browser.switchTo().frame("packageListFrame"); //Switch to first frame
    element(by.linkText('org.openqa.selenium')).click();
    browser.sleep(3000);
    
    browser.switchTo().defaultContent();  //Switch to default page
    browser.switchTo().frame("packageFrame"); //Switch to second frame
    element(by.linkText('WebDriver')).click();
    browser.sleep(3000);

    browser.switchTo().defaultContent();
    browser.switchTo().frame("classFrame"); //Switch to third frame
    element(by.xpath("//div[@class='topNav']//a[contains(text(),'Index')]")).click();
    browser.sleep(3000);  
})



})