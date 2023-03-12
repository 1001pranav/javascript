function exchangekeyValues(sourceObject) {

  Object.keys(sourceObject).forEach((keys) => {
    let orginalValue=sourceObject[keys]
    delete sourceObject[keys]
    if(sourceObject.hasOwnProperty(orginalValue)){
      let value= " "+keys
      sourceObject[orginalValue] += value
    }
    else{

      sourceObject[orginalValue]=keys
    }

  });
  return sourceObject
}
console.log(exchangekeyValues({1:"a",2:"b",3:"c",4:"d",5:"d",e:"e"}))
module.exports = exchangekeyValues;
  