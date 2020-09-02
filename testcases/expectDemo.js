describe("expectDemo", function()
{

    it("expectTest", function()
    {
        
        //Test1
        //let x =100;
        //expect(x).toBe(100);
        //expect(x).not.toBe(100);

        //expect(x).toEqual(100);
        //expect(x).not.toEqual(150);

        //Test2
        //let x = [10,20,30];
        //expect(x).toBe([10,20,30]);  //failed
        //expect(x).toEqual([10,20,30]) //Passed

        //Test3
        //let x = [10,20,30];
        //let y =x;
        //expect(x).toBe(y);

        //Test4
        //browser.get("https://angularjs.org/");
        //expect(browser.getTitle()).toBe('AngularJS — Superheroic JavaScript MVW Framework');
        //expect(browser.getTitle()).toContain('AngularJS');

        //Test5
        //let arr = [10,20,30,40,50];
        //expect(arr).toContain(30);
        //expect(arr).toContain(100); //Failed
        //expect(arr).not.toContain(100)  //Passed

        //Test6
        //let names = ["David","John","Kenedy"];
        //expect(names).toContain("Kenedy");

        //Test7
        //let value = 100;
        //expect(value).toBeGreaterThan(50);
        //expect(value).toBeLessThan(200);

        //Test8
        let value = 100;
        //expect(value).toBeNaN(); //False
        //expect(value).not.toBeNaN(); //Passed

        //expect(value).toBeNull();  //False
        expect(value).not.toBeNull();  //True

    })



})