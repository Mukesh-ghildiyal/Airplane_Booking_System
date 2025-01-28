
const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
function validateCreateRequest(req, res, next) {
    if (!req.body.flightNumber) {

        ErrorResponse.message = "flightNumber  are required",
            ErrorResponse.error = new AppError(["flightNumber  are required"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.airplaneId) {

        ErrorResponse.message = "airplaneId  are required",
            ErrorResponse.error = new AppError(["airplaneId  are required"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.departureAirportId) {

        ErrorResponse.message = "departureAirportId  are required",
            ErrorResponse.error = new AppError(["departureAirportId  are required"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.arrivalAirportId) {

        ErrorResponse.message = "arrivalAirportId  are required",
            ErrorResponse.error = new AppError(["arrivalAirportId  are required"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.arrivalTime) {

        ErrorResponse.message = "arrivalTime  are required",
            ErrorResponse.error = new AppError(["arrivalTime  are required"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.departureTime) {

        ErrorResponse.message = "departureTime  are required",
            ErrorResponse.error = new AppError(["departureTime  are required"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (!req.body.price) {

        ErrorResponse.message = "price  are required",
            ErrorResponse.error = new AppError(["price  are required"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }

    if (!req.body.totalSeats) {

        ErrorResponse.message = "totalSeats  are required",
            ErrorResponse.error = new AppError(["totalSeats  are required"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequest
}