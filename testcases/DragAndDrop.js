describe("musuite", function(){

    it("drag and drop", function(){

        browser.get("https://codef0rmer.github.io/angular-dragdrop/#!/");
        browser.manage().window().maximize();

        var source_ele = element(by.model('list1'));
        var target_ele = element(by.model('list2'));

        browser.actions().dragAndDrop(source_ele,target_ele).perform();
        browser.sleep(3000);

    })




})