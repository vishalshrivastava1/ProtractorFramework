describe("Table Demo", function()
{

    beforeAll(function()
    {
        browser.get("https://dassdevarajan.github.io/demo-app/");
        browser.sleep(5000);
    })

    it("View product details", function(){

        var product_name ="1001 Activities Book";
        var description ="Designed for preschool kids, the 1001 Activities Book is an educational activity book that promises to engage tiny tots with their first educative lessons in a playful and fun-filled manner.";
        var category ="Books";
        var quantity ="300";
        var unitPrice ="4";
        var supplier ="ABC Publications";
        var Returnable ="false";
       
        element.all(by.tagName('tr')).last().element(by.id('view')).click();
        //browser.sleep(5000);

        expect(element(by.tagName("h3")).getText()).toBe("Product View");

        expect(element.all(by.tagName('tr')).get(0).element(by.tagName('td')).getText()).toBe(product_name);
        expect(element.all(by.tagName('tr')).get(1).element(by.tagName('td')).getText()).toBe(description);
        expect(element.all(by.tagName('tr')).get(2).element(by.tagName('td')).getText()).toBe(category);
        expect(element.all(by.tagName('tr')).get(3).element(by.tagName('td')).getText()).toBe(quantity);
        expect(element.all(by.tagName('tr')).get(4).element(by.tagName('td')).getText()).toBe(unitPrice);
        expect(element.all(by.tagName('tr')).get(5).element(by.tagName('td')).getText()).toBe(supplier);
        expect(element.all(by.tagName('tr')).get(6).element(by.tagName('td')).getText()).toBe(Returnable);
        browser.sleep(5000);
    })


    it("Navigate to product list", function(){
        element(by.id("list-menu")).click();
        expect(element(by.tagName("h3")).getText()).toBe("Product List"); //The correct is "Product List", changed to fail Test Case
    })


    it("Delete product", function(){
        browser.sleep(5000);
        element.all(By.tagName("tr")).get(1).element(by.id("delete")).click() ;
        browser.sleep(5000);
    })



});