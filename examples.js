

setImmediate(() => console.log('setimmediate2'));

setImmediate(() => console.log('setimmediate3'));

setTimeout(() => console.log('settimeout'), 0);

process.nextTick(function() {
   console.log("process nexttick");
});

Promise.resolve("promise").then(console.log).catch(console.error);

/*========================================*/

console.log("Start");
var i = 5;

setTimeout(function () {
    while (i > 0) {
        console.log("infinite loop");
        i--;
    }
}, 0);


console.log("End");


/*========================================*/

setTimeout(function(){
    console.log("SETTIMEOUT");
});
setImmediate(function(){
    console.log("SETIMMEDIATE");
});
