function checkIpAddress(ipAddress){
  return `${(/^([01]?[0-9][0-9]?|25[0-5]|2[0-4][0-9])(\.|:)([01]?[0-9][0-9]?|25[0-5]|2[0-4][0-9])(\.|:)([01]?[0-9][0-9]?|25[0-5]|2[0-4][0-9])(\.|:)([01]?[0-9][0-9]?|25[0-5]|2[0-4][0-9])$/.test(ipAddress))}`;
}




console.log(checkIpAddress("11:234:52"));
console.log(checkIpAddress("11.234.52.124"));
console.log(checkIpAddress("11:234:52:124"));
console.log(checkIpAddress("11:234:52:256"));
module.exports = checkIpAddress;
