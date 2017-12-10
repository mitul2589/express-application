//process.stdin.pipe().pipe(process.stdout);

 /*const { Readable } = require('stream');

const inStream = new Readable({
    read(size) {
      this.push(String.fromCharCode(this.currentCharCode++));
      if (this.currentCharCode > 90) {
        this.push(null);
      }
    }
  });
  inStream.currentCharCode = 65;
  inStream.pipe(process.stdout); */

  const { Duplex } = require('stream');
  
  const inoutStream = new Duplex({
    write(chunk, encoding, callback) {
      console.log(chunk.toString());
      callback();
    },
  
    read(size) {
      this.push(String.fromCharCode(this.currentCharCode++));
      if (this.currentCharCode > 90) {
        this.push(null);
      }
    }
  }); 
  
  inoutStream.currentCharCode = 65;
  process.stdin.pipe(inoutStream).pipe(process.stdout); 

  /*const { Transform } = require('stream');
  
  const upperCaseTr = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().toUpperCase());
      callback();
    }
  });
  
  process.stdin.pipe(upperCaseTr).pipe(process.stdout);*/