import sum from "./Sum";

test("to check if sum.js fn is working fine or not",()=>{
    let output = 30
    expect(sum(10,20)).toBe(output)
})