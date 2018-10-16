if (process.env.NODE_ENV === 'production') {
  // prod mode
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
  // dev mode
}
