const requestFetch = require('./PromiseThenAPI');
/*
test("testing for success data", async () => {
    //expect.assertions(1);
    let data = await requestFetch("http://juegostudio.in/SUGI-APP/V2/rest.php")
    expect(data.body).toBe(1)

})*/
it('works with promises', () => {
  expect.assertions(1);
  return requestFetch("http://juegostudio.in/SUGI-APP/V2/rest.php").then(data => expect(data).toEqual('Mark'));
});
