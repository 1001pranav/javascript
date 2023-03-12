let array=["can", "store", 5, "and", "string"]

array.push("To insert element in end")
console.log("using Push",array);
array.pop()//to pop the last element
console.log("using Pop",array);

array.unshift("insert element at begining")
console.log("Using unshift",array);
array.shift()//remove element from begining
console.log("Using shift",array);

const  startIndex=2;
const numberOfElementToDelete=1
const  replacedData="number"
array.splice(startIndex,numberOfElementToDelete,replacedData)
console.log("Using splice",array);

console.log("Using slice",array.slice(1,3));
let newArray=[...array]
console.log(newArray);
newArray=array//acts like pointers if newArray is changed then it is reflected to old one

newArray.push("ds")
console.log(newArray);
console.log("Copying an array using [...<arrayname>]",newArray);

console.log("WE can use spread operator(...) inside an array",["array",...array])
console.log("we can use indexOF() to find index of element  ",array.indexOf("number"),"if element is not prsent then",array.indexOf("element"));


let object={
  objName:"is a Property",
  func(){return  "can also be used inside Object"}
}

console.log("To access an object we can use objectName.property or objectName.func()",object.objName,object.func());
function json(name,value) {

    this.name=name;
    this.value=value;

}
let funcObject=new json("ordinaryName",0);
console.log(funcObject.name,funcObject.value, funcObject instanceof json);
