const CrudRepository = require('./crud-repository');
const { City } = require('../models');

class CityRepository extends CrudRepository {
    constructor() {
        super(City);//using super keyword you can call constructor of parent class
    }
}

module.exports = CityRepository;