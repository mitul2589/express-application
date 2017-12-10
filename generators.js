function *foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

//this "instantiates" (not sure if this is correct??) the generator
//and returns an object with a `next` method
var it = foo( 5 );

// note: not sending anything into `next()` here
//if something was sent into `next` here it would be "ignored" and have no effect
//essentially `yield` will pass data out of the generator and into the `value
console.log( it.next() );       // { value:6, done:false }

//essentially this is a form of "dependency injection" and the `12` passed into
//`next` is injected into the function, completely omitting the previous
//`x +1` value, completely fucking forget about it and don't ask questions -:P
//therefore `y = 2 * 12` and the next `yield` spits out `24 / 3` into `value`
console.log( it.next( 12 ) );   // { value:8, done:false }

//again fucking forget about `2 * 12 / 3` because `13` is injected into the function
//so that's what the fuck `z` is. If this doesn't make since just relax because 
//hopefully in a week or so you can actually figure out how to use a generator in
//production code, anyway 
//`x = 5`
//`y = 24`
//`z = 13`
//+--------
//     42
//and at least we don't feel so stupid that we can do simple math and if there
//are no more `yield`s what is returned is the `value`
console.log( it.next( 13 ) );   // { value:42, done:true }


function *test(m) {
   var x = yield (m + 5);
   var y = yield (x + 5);
   return x + y;
}

var it2 = test(5);
console.log(it2.next());
console.log(it2.next());
console.log(it2.next(30));

function* Add(m) {
    var x = yield (m + 1);
    var y = yield(null);
    y = 6
    console.log(x);
    console.log(y);
    return x + y;
 }
 
 var gen = Add(5);
 
 console.log(gen.next());
 
 console.log(gen.next(3));
 
 console.log(gen.next());

 function* channel () {
    var name = yield 'hello, what is your name?' // [1]
    return 'well hi there ' + name
  }
  var gen = channel()
  console.log(gen.next().value) // hello, what is your name? [2]
  console.log(gen.next()) // well hi there billy [3]