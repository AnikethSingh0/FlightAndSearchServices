const { AirportRepository } = require("../repository/index");

class airportService {
  constructor() {
    this.AirportRepository = new AirportRepository();
  }

  async createAirport(data) {
    try {
      const Airport = await this.AirportRepository.createAirport(data);
      return Airport;
    } catch (err) {
      console.log("Error in AirportService - createAirport");
      throw err;
    }
  }

  async updateAirport(airportId, data) {
    try {
      const response = await this.AirportRepository.updateAirport(
        airportId,
        data
      );
      return response;
    } catch (err) {
      console.log("Error in AirportService - updateAirport");
      throw err;
    }
  }
  async deleteAirport(airportId) {
    try {
      const response = await this.AirportRepository.deleteAirport(airportId);
      return response;
    } catch (err) {
      console.log("Error in airportService - deleteAirport");
      throw err;
    }
  }
  async getAirport(id) {
  try {
    const airport = await this.AirportRepository.getAirport(id); 
    return airport;
  } catch (error) {
    console.log("Error in AirportService - getAirport", error);
    throw error;
  }
}

}

module.exports = airportService;
