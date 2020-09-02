let studentpage = require ('../pages/studentpage')

describe("mysuite",function(){

    it("add record",function(){

        studentpage.get("http://www.trycatchclasses.com/code/demo/angular4_crud/#");
        browser.sleep(2000);
        studentpage.setName("John");
        studentpage.setContact("India");
        studentpage.setSubject("JS");
        studentpage.setMarks("100");
        studentpage.clickSubmit();
        browser.sleep(3000);

        studentpage.verifyResult("John","India","JS","100");
        browser.sleep(1000);

    })

})