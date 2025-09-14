const CityService = require('./city-service'); 
const AirportService= require('./airport-service')
const FlightService = require('./flight-service')
const airportservice = new AirportService();
const cityservice = new CityService();
const flightservice = new FlightService();
module.exports = { cityservice , airportservice , flightservice};
