const CrudRepository = require('../repositories/crud-repository');
const { flight } = require('../models');

class FlightRepository extends CrudRepository {
    constructor() {
        super(flight);//using super keyword you can call constructor of parent class
    }

    async getAllFlights(filter, sort) {
        const response = await flight.findAll({
            where: filter,
            order: sort
        })
        return response;
    }

}

module.exports = FlightRepository;