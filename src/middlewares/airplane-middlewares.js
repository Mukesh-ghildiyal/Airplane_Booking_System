
const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
function validateCreateRequest(req, res, next) {
    if (!req.body.modelNumber || !req.body.capacity) {

        ErrorResponse.message = "modelNumber  are required",
            ErrorResponse.error = new AppError(["modelNumber  are required"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequest
}