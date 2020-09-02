describe("mysuite", function()
{

    beforeAll(function()
    {
        console.log("Opening application............")
    })

    afterAll(function()
    {
        console.log("Closing application............")
    })

    beforeEach(function()
    {
        console.log("This is login............")
    })

    afterEach(function()
    {
        console.log("This is logout............")
    })

    it("Search Test",function()
    {
        console.log("Search Test............")
    })

    it("Advanced Search Test",function()
    {
        console.log("Advanced Search Test............")
    })
    
})
