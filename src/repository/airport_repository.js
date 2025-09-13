const { Airport } = require("../models/index");

class AirportRepository {
  async createAirport({ name }) {
    try {
      const airport = await Airport.create({ name });
      return airport;
    } catch (err) {
      console.log("Error while creating airport in repository", err);
      throw err;
    }
  }

  async deleteAirport(airportId) {
    try {
      return await Airport.destroy({ where: { id: airportId } });
    } catch (err) {
      console.log("Error while deleting airport in repository", err);
      throw err;
    }
  }

  async updateAirport(airportId, name) {
    try {
      return await Airport.update({ name }, { where: { id: airportId } });
    } catch (err) {
      console.log("Error while updating airport in repository", err);
      throw err;
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await Airport.findByPk(airportId);
      return airport;
    } catch (err) {
      console.log("Error while fetching airport in repository", err);
      throw err;
    }
  }
}

module.exports = AirportRepository;
