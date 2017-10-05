var async = require('async')
var fs = require('fs')

async.each(['file2.txt', 'file3.txt'], fs.readFile, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Finished')
})

fs.readdir(process.cwd(), function (err, files) {
  async.map(files, fs.stat, function (err, stats) {
    stats.map(function (item) {
            // console.log(item);
    })
  })
})

async.parallel([
  function (callback) {
    callback(null, 'abc\n')
  },
  function (callback) {
    callback(null, 'xyz\n')
  }], function (err, results) {
  console.log(results)
})

async.waterfall([
  function (callback) {
    callback(null, 5, 5)
  },
  function (arg1, arg2, callback) {
    callback(null, arg1 + arg2)
  },
  function (arg1, callback) {
        // arg1 now equals 'three'
    callback(null, arg1)
  }
], function (err, result) {
  console.log(result)
})

var q = async.queue(function (task, callback) {
  setTimeout(() => console.log(task.name), task.delay)
  callback()
}, 2)

// assign a callback
q.drain = function () {
  console.log('all items have been processed')
}

// add some items to the queue

q.push({name: 'foo', delay: 2000}, function (err) {
  console.log('finished processing foo')
})
q.push({name: 'bar', delay: 2000}, function (err) {
  console.log('finished processing bar')
})
q.push({name: 'mit', delay: 500}, function (err) {
  console.log('finished processing mit')
})
