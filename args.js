//console.log(arguments);

var result = 0;

for (var i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i]);
}
console.log(result);

console.log(process.argv);