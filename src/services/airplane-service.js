//service is used to interact repository with database

const { StatusCodes } = require('http-status-codes');
const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            let explanation = [];

            error.errors.forEach((err) => {
                explanation.push(err.message)
            })
            // console.log(explanation)
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes() {
    try {
        const airplane = await airplaneRepository.getAll();
        return airplane;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id) {
    try {
        const airplane = await airplaneRepository.get(id);
        return airplane;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError("The airplane you requested is not present", error.statusCode)
        }
        throw new AppError('Cannot fetch data of all the airplanes by given id', StatusCodes.INTERNAL_SERVER_ERROR);

    }
}

async function destroyAirplane(id) {
    try {
        const response = await airplaneRepository.destroy(id)
        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError("The airplane you requested to delete is not present", error.statusCode)
        }
        throw new AppError('Cannot delete data of all the airplanes by given id', StatusCodes.INTERNAL_SERVER_ERROR);

    }
}

async function updateAirplane(id, data) {
    try {
        const airplane = await airplaneRepository.update(id, data);
        if (!airplane) {
            throw new AppError('The airplane you requested to update is not present', StatusCodes.NOT_FOUND);
        }
        return airplane;
    } catch (error) {
        console.log(error)
        if (error.name === 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot update airplane data', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}



module.exports = {
    createAirplane, getAirplanes,
    getAirplane, destroyAirplane,
    updateAirplane
}