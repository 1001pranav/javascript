const checkIpAddress=require('./task3')
it("working",() => {

  expect(checkIpAddress("10.10.99").toBeFalsy)
})
it("working",() => {

  expect(checkIpAddress("10,a.10.99").toBeFalsy)
})
it("working",() => {

  expect(checkIpAddress("10.-10.22.99").toBeFalsy)
})
it("working",() => {

  expect(checkIpAddress("10.10.99.366").toBeFalsy)
})
it("working",() => {

  expect(checkIpAddress("10.10.99.41.30").toBeFalsy)
})
it("working",() => {

  expect(checkIpAddress("10.10.99.36").toBetruthy)
})
