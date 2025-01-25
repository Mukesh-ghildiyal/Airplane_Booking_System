const CrudRepository = require('./crud-repository');
const { Airplane } = require('../models');

class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);//using super keyword you can call constructor of parent class
    }
}

module.exports = AirplaneRepository;