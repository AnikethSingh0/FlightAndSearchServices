const crudRepository = require('./crud-repository');


module.exports={
    CityRepository:require('../repository/city-repository'),
    AirportRepository:require('../repository/airport_repository'),
    flightRepository:require('./flight-repository'),
    airplaneRepository:require('./airplane-repository'),
    crudRepository : require('./crud-repository')
}

