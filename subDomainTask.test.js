
const subDomain=require('./subDomainTask.js')
it("Testing for the input working.js.com",() => {
  expect(subDomain("working.js.com")).toMatch("Output: working");
})
it("Testing for output a",() => {
expect(subDomain("a.js.com")).toMatch("Output: a")

})
it("testing condtion no output",() => {
  expect(subDomain("js.com")).toMatch("NO SUBDOMAIN")
})
it("testing using http:",() => {
  expect(subDomain("http://xy.js.com")).toMatch("Output: xy")
})
it("testing using https:",() => {
  expect(subDomain("https://js.com")).toMatch("NO SUBDOMAIN")
})
it("testing using incorrect url ",() => {
  expect(subDomain("https://..com")).toMatch("NO SUBDOMAIN")
})
