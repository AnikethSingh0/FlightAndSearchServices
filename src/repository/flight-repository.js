const { Flight } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository {
  #filterFlight(data) {
    let filter = {};

    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }

    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    if (data.minPrice) {
      filter.price = { [Op.gte]: data.minPrice };
    }

    if (data.maxPrice) {
      filter.price = {
        ...filter.price,
        [Op.lte]: data.maxPrice,
      }; 
    }

    return filter;
  }

  async flightCreate(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (err) {
      console.log("something went wrong in repository", err);
      throw err;
    }
  }

  async getAllFlight(filter) {
    try {
      const filterObject = await this.#filterFlight(filter); 
      const flights = await Flight.findAll({
        where: filterObject,
      });
      return flights;
    } catch (err) {
      console.log("something went wrong in repository", err);
      throw err;
    }
  }
}

module.exports = FlightRepository;
