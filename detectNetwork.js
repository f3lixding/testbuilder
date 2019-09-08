// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var visaLength = new Set([13, 16, 19]);
  var mcPrefix = new Set(['51', '52', '53', '54', '55']);
  var discoverPrefix = new Set(['6011', '644', '645', '646', '647', '648', '649', '65']);
  var mastroPrefix = new Set(['5018', '5020', '5038', '6304']);
  var unionPayObj = {
    prefix : new Set(['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759']),
    len : new Set([16, 18, 19])
  };


  if(cardNumber.length == 14 && (cardNumber.substring(0, 2)==='38' || cardNumber.substring(0, 2)==='39')) {
    return "Diner's Club";
  } else if(cardNumber.length == 15 && (cardNumber.substring(0, 2)==='34' || cardNumber.substring(0, 2)==='37')) {
    return "American Express";
  } else if(visaLength.has(cardNumber.length) && cardNumber[0]==='4') {
    return "Visa";
  } else if(mcPrefix.has(cardNumber.substring(0, 2)) && cardNumber.length===16) {
    return "MasterCard";
  } else if((discoverPrefix.has(cardNumber.substring(0, 4)) || discoverPrefix.has(cardNumber.substring(0, 3)) || discoverPrefix.has(cardNumber.substring(0,2))) && (cardNumber.length===16 || cardNumber.length===19)) {
    return "Discover";
  } else if(mastroPrefix.has(cardNumber.substring(0, 4)) && (cardNumber.length>=12 && cardNumber.length<=19)) {
    return "Maestro";
  } else if(((cardNumber.substring(0, 6)-'0'>=622126 && cardNumber.substring(0, 6)-'0'<=622925) || (cardNumber.substring(0, 3)-'0'>=624 && cardNumber.substring(0, 3)-'0'<=626) || (cardNumber.substring(0, 4)-'0'>=6282 && cardNumber.substring(0, 4)-'0'<=6288)) && (cardNumber.length>=16 && cardNumber.length<=19)) {
    return "China UnionPay";
  } else if((unionPayObj.prefix.has(cardNumber.substring(0, 4)) || unionPayObj.prefix.has(cardNumber.substring(0, 6))) && unionPayObj.len.has(cardNumber.length)) {
    return "Switch";
  }
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


