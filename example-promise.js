function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve (a + b);
    } else {
      reject ('One or both of them are not number');
    }
  })
}

addPromise(3, "6").then(function (addition) {
  console.log('Success: ' + addition);
}, function (err) {
  console.log('Error: ' + err);
});
