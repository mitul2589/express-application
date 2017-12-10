var fs = require('fs');
//console.log("===========================Example 1===========================");
/*
fs.readFile('file2.txt', (err, data) => {
   if (err) return err;
   setImmediate(() => console.log("setImmediate-1"));
   setTimeout(() => console.log("setTimeout-1"));
   setImmediate(() => console.log("setImmediate-2"));
});
*/

/*
var i = 0;
var start = new Date();
function foo () {
    i++;
    if (i < 10) {
        setImmediate(foo);
    } else {
        var end = new Date();
        console.log("Execution time: ", (end - start));
    }
}
foo();
*/

var i = 0;
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
 
foo();

//console.log("===========================Example 2===========================");

/*
var i = 1;
var start = new Date();
function foo () {
    
    if(i <= 5) {
        console.log(i);
        i++;
        
        setTimeout(foo, 1);
        setImmediate(function () {
            console.log("setImmediate");
        });
        
        
        
        setTimeout(function () {
            console.log("setTimeout");
        });
        //process.nextTick(foo);
    } else {
        var end = new Date();
        console.log("Execution time: ", (end - start));
    }
}
foo();
*/

/*process.nextTick(function A() {
    process.nextTick(function B() {
      console.log(1);
      process.nextTick(function D() { console.log(2); });
      process.nextTick(function E() { console.log(3); });
    });
    process.nextTick(function C() {
      console.log(4);
      process.nextTick(function F() { console.log(5); });
      process.nextTick(function G() { console.log(6); });
    });
  });
  
  setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
  }, 0)
*/

/*
setImmediate(function A() {
    setImmediate(function B() {
        console.log(1);
        setImmediate(function D() { console.log(2); });
        setImmediate(function E() { console.log(3); });
    });
    setImmediate(function C() {
        console.log(4);
        setImmediate(function F() { console.log(5); });
        setImmediate(function G() { console.log(6); });
    });
});
setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
}, 0);
*/

/*
setTimeout(function() {
    console.log("TIMEOUT 1");
    setImmediate(function() {
        console.log("SETIMMEDIATE 1");
    });
}, 0);
setTimeout(function() {
    console.log("TIMEOUT 2");
    setImmediate(function() {
        console.log("SETIMMEDIATE 2");
    });
}, 0);
setTimeout(function() {
    console.log("TIMEOUT 3");
}, 0);
*/

/*
let bar;
// this has an asynchronous signature, but calls callback synchronously
function someAsyncApiCall(callback) {
    process.nextTick(callback); 
    
}
// the callback is called before `someAsyncApiCall` completes.
someAsyncApiCall(() => {
    // since someAsyncApiCall has completed, bar hasn't been assigned any value
    setImmediate(function C() {
        console.log(4);
    });
    console.log('bar', bar); // undefined
    
});
bar = 1;
*/

/*
const EventEmitter = require('events');
const util = require('util');

function MyEmitter() {
  EventEmitter.call(this);
  process.nextTick(() => {
    this.emit('event');
  });
}
util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
*/

/*setTimeout(function(){
    console.log('Hello world 5'); // It's waiting like a normal person at a queue
  }, 0);
  
  setImmediate(function(){
    console.log('Hello world 4'); 
    // It's like get to last and be take care of first 
    // but always after of .nextTick and before of setInterval(, 0)
  });
  
  process.nextTick(function(){
     console.log('Hello world 3'); // It's like be at the bottom at this file
  });
  
  console.log('Hello world 1');
  console.log('Hello world 2');*/