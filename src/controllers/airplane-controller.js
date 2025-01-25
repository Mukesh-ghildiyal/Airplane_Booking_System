const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');
const { ErrorResponse, SuccessResponse } = require('../utils/common');
const e = require('express');

/**
 * POST :/airplane
 * req-body:{ modelNumber :"airbus420" , capaciyt :200}
 */

async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })
        SuccessResponse.data = airplane;
        SuccessResponse.message = "Airplane created successfully";
        return res.status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong in airplane controller";
        ErrorResponse.error = error;
        return res.status(error.statusCode)
            .json(ErrorResponse);
    }
}

/**
 * GET :/airplane
 * req-body:{ modelNumber :"airbus420" , capaciyt :200}
 */

async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes()
        SuccessResponse.data = airplanes;
        SuccessResponse.message = "Airplane data fetched successfully";
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong in airplane controller";
        ErrorResponse.error = error;
        return res.status(error.statusCode)
            .json(ErrorResponse);
    }
}

/**
 * POST :/airplane/:id  
 */

async function getAirplane(req, res) {
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.message = "Something went wrong in airplane controller";
        ErrorResponse.error = error;
        return res.status(error.statusCode)
            .json(ErrorResponse);
    }
}

/**
 * DELETE :/airplane/:id  
 */

async function destroyAirplane(req, res) {
    try {
        const airplane = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.message = "Something went wrong in airplane controller";
        ErrorResponse.error = error;
        return res.status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}
