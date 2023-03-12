function checkingNestedObject(replaceObject,sourceObject){

  Object.entries(sourceObject).forEach((sourceObjectEntries) => {
    if (typeof(sourceObjectEntries[1])==="object"){

      Object.keys(replaceObject).forEach((replaceObjectKey) => {

        if(sourceObjectEntries[1].hasOwnProperty(replaceObjectKey)){

          sourceObject[sourceObjectEntries[0]][replaceObjectKey]=replaceObject[replaceObjectKey]
        }
      });
      let objectReplaced=checkingNestedObject(replaceObject,sourceObjectEntries[1])
      sourceObject[sourceObjectEntries[0]]=objectReplaced
    }
  });

  return sourceObject
}


function mutationFormula(sourceObject,replaceObject){

  Object.keys(replaceObject).forEach((key) => {

    if(sourceObject.hasOwnProperty(key)){

      sourceObject[key]=replaceObject[key]
    }

  });
  sourceObject=checkingNestedObject(replaceObject,sourceObject)
  console.log(sourceObject);
  return sourceObject
}
//sourceObject={ name: "pranav", profession: "programmer", address: { street: "1st Lane", place: "Mangalore",dist:{taluk:"manglore", place: "something"} } }
var object = mutationFormula( 
  {
    name: "pranav",
    place: "manglore",
    address: {
      street:"AKG",
      taluk:"kundapur",
      caddress: {
        home:"aaa",
        street:"AKG",
        place:"Kundapur",
        taluk:"kundapur"
      }
    }
  },{
    name:"Ganesh",
    place:"kotara",
    street:"1st lane",
    taluk:"manglore",
    home:"Ganesh"
  }
)

//console.log(object)
//console.log();
module.exports = mutationFormula;
