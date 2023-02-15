const addFive = require('./addFive')

describe("first suite",()=>{
    test("first Test",()=>{
        expect(addFive(10)).toBe(15)
    })
})


