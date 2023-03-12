// javascript  Objects

//if else switch and various operations are in basic_js.js

let objects = {
  "properties" : "data in objects are accessed through properties",
  "array" : [ "we can store" , "even array" ],
  5 : "properties like integer will be converted/telecasted to string",
}

console.log("Object data can be accessed using 'objects.property'", objects.array );
console.log("Or we can also use  'objects['property']'", objects['properties'] )

let prop = 5;

console.log("We can also use letiable as property", objects[prop] )

objects["5"]="Properties is changed also data"

objects['add']="WE can add new objects like this or using dot"

delete objects.add //to delete

console.log(objects.hasOwnProperty("property"))//to check wether the property is present or not
console.log("Keys in Objects",Object.keys(objects))
console.log("values in Objects",Object.values(objects))

let myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

console.log(myMusic[0]["formats"][1])
console.log(myMusic.length());
