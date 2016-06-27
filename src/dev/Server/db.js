var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ipMap', function () {
  console.log('mongodb connected')
})
module.exports = mongoose

