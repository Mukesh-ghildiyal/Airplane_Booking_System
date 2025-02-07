const { StatusCodes } = require('http-status-codes');
const { FlightService } = require('../services');
const { ErrorResponse, SuccessResponse } = require('../utils/common');
const e = require('express');

/**
 * POST :/flights
 * req-body:{ modelNumber :"airbus420" , capaciyt :200}
 */

async function createFlight(req, res) {
    try {
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats,
        })
        SuccessResponse.data = flight;
        SuccessResponse.message = "Flight created successfully";
        return res.status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        console.log('error', error)
        ErrorResponse.message = "Something went wrong in Flight controller";
        ErrorResponse.error = error;
        return res.status(error.statusCode)
            .json(ErrorResponse);
    }
}


async function getAllFlights(req, res) {
    try {
        const flights = await FlightService.getAllFlights(req.query)
        SuccessResponse.data = flights;
        SuccessResponse.message = "Flight created successfully";
        return res.status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        console.log('error', error)
        ErrorResponse.message = "Something went wrong in Flight controller";
        ErrorResponse.error = error;
        return res.status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createFlight,
    getAllFlights
}
