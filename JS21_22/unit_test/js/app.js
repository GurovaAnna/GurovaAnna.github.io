function pow (number, power) {
  var result;
    if (power === 0) {
    result = 1;
      }
   if (power > 0) {
     result = 1;
    for ( var i = 1; i <= power; i++) {
       result *= number;
        }
} else {
  result = 1;
  for ( var j = 1; j <= -power; j++) {
  result *= number;
}
  result = 1/result;
}
    return result;
}

// module.exports.pow = pow; (for phantomjs)
