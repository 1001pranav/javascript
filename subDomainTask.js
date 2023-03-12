function subDomain(url){
var check=/\w+?w*\.\w+\.\w+/g.test(url)

if(check){
  var matchedUrl=url.match(/\/\w+\./)
  if(matchedUrl===null){
    matchedUrl=url.match(url.match(/^\w*\./))

  }
  return 'Output: '+matchedUrl[0].match(/\w+/)[0]
}
else{
  return "NO SUBDOMAIN";
}
}
module.exports = subDomain;
