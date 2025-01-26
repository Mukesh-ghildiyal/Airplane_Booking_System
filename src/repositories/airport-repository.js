const CrudRepository = require('./crud-repository');
const { Airport } = require('../models');

class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport);//using super keyword you can call constructor of parent class
    }
}

module.exports = AirportRepository;