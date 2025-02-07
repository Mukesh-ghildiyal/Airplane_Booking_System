const { StatusCodes } = require('http-status-codes');

const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError' || error.name === 'SequelizeValidationError') {
            let explanation = [];

            error.errors.forEach((err) => {
                explanation.push(err.message)
            })
            // console.log(explanation)
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new city object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(id) {
    try {
        const response = await cityRepository.destroy(id)
        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError("The city you requested to delete is not present", error.statusCode)
        }
        throw new AppError('Cannot delete data of all the city by given id', StatusCodes.INTERNAL_SERVER_ERROR);

    }
}

async function updateCity(id, data) {
    try {
        const city = await cityRepository.update(id, data);
        if (!city) {
            throw new AppError('The city you requested to update is not present', StatusCodes.NOT_FOUND);
        }
        return city;
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot update city data', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createCity,
    updateCity,
    destroyCity
}