

/* setImmediate(() => console.log('setimmediate2'));

setImmediate(() => console.log('setimmediate3'));

setTimeout(() => console.log('settimeout'), 0);

process.nextTick(function() {
   console.log("process nexttick");
});

Promise.resolve("promise").then(console.log).catch(console.error);
 */
/*========================================*/

/* console.log("Start");
var i = 5;

setTimeout(function () {
    while (i > 0) {
        console.log("infinite loop");
        i--; 
    }
}, 0);


console.log("End"); */


/*========================================*/

/* setTimeout(function(){
    console.log("SETTIMEOUT---");
}, 2000);
setImmediate(function(){
    console.log("SETIMMEDIATE");
}); */

/*========================================*/

/* var fs = require('fs');
function test() {
    fs.readFile('file2.txt', (err, data) => {
        setTimeout(function(){
            console.log("SETTIMEOUT");
        });
        setImmediate(function(){
            console.log("SETIMMEDIATE");
        });
        process.nextTick(() => console.log("Next Tick..."));
    });
    
    
}

test(); */


/* ===========================================*/

/* var i = 0;
var start = new Date();
function foo () {
    console.log(i);
    i++;
    if(i < 10) {
        setImmediate(foo);
        setTimeout(function () {
            console.log("setTimeout");
        },0);
    } else {
        var end = new Date();
        console.log("Execution time: ", (end - start));
    }
}
 
foo(); */


var i = 0;
var start = new Date();
function foo () {
    console.log(i);
    
    if(i < 10) {
        process.nextTick(foo);
        setImmediate(function () {
            console.log("setImmediate");
        });
        i++;
    } else {
        var end = new Date();
        console.log("Execution time: ", (end - start));
    }
}
foo();