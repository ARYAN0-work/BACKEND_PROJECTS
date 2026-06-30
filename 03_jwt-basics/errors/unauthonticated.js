const CustomAPIError = require('./custom-error')
const {StatusCode} = require('http-status-codes')
class UnauthenticatedError extends CustomAPIError {
  constructor(message, statusCode) {
    super(message)
    this.statusCode =StatusCode.BAD_REQUEST
  }
}

module.exports = UnauthenticatedError

