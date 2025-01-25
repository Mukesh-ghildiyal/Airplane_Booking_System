const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../services');
const { ErrorResponse, SuccessResponse } = require('../utils/common');
const e = require('express');

/**
 * POST :/city
 * req-body:{ name:'bhopal'}
 */

async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name,

        })
        SuccessResponse.data = city;
        SuccessResponse.message = "City created successfully";
        return res.status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong in city controller";
        ErrorResponse.error = error;
        return res.status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createCity
}