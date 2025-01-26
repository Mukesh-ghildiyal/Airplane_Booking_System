
const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
function validateCreateRequest(req, res, next) {
    if (!req.body.name) {

        ErrorResponse.message = "name  are required",
            ErrorResponse.error = new AppError(["name  are required"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.code) {

        ErrorResponse.message = "code  are required",
            ErrorResponse.error = new AppError(["code  are required"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.cityId) {

        ErrorResponse.message = "cityId  are required",
            ErrorResponse.error = new AppError(["cityId  are required"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequest
}