function* Add(x) {
    yield console.log(x + 1);
    var y = yield(null);
    y = 6
    console.log(x + y);
 }
 
 var gen = Add(5);
 
 gen.next();
 
 gen.next(); 

 gen.next(); 