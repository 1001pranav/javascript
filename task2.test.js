const exchangekeyValues=require('./task2')

it('worked',()=>{
  expect(exchangekeyValues({pas:"val",sun:"moon",good:"bad"})).toMatchObject({val:"pas",moon:"sun",bad:"good"})
})
it('worked',()=>{
expect(exchangekeyValues({10:"a",b:"20",30:"c",d:"40",e:"40",f:"60"})).toMatchObject({a:"10",20:"b",c:"30",40:"d e",60:"f"})
})
it('worked',()=>{
expect(exchangekeyValues({1:"a",2:"b",3:"c",4:"d",5:"d",e:"e"})).toMatchObject({a:"1",b:"2",c:'3',d:"4 5",e:"e"})
})
