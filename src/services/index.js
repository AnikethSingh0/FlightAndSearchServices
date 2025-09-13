const CityService = require('./city-service'); 
const AirportService= require('./airport-service')
const airportservice = new AirportService();
const cityservice = new CityService();
module.exports = { cityservice , airportservice};
