function add (a, b) {
  return parseInt(a) + parseInt(b);
}

if (process.argv[2] === undefined || process.argv[3] === undefined) {
  console.log('NaN');
} else {
  console.log(add(process.argv[2], process.argv[3]));
}
