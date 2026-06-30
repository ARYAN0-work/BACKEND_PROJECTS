const CustomAPIError = require('./custom-error')
const BadRequestError = require('./bad-request')
const UnauthenticatedError = require('./unauthenticated')


module.exports ={
    CustomAPIError,
    BadRequestError,
    UnauthenticatedError
}

// for setting up status code use library http-status-codes => you can find all status codes