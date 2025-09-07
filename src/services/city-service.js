const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const response = await this.CityRepository.createCity(data);
      return response;
    } catch (err) {
      console.log("Error in CityService - createCity");
      throw err;
    }
  }

  async getAllCity(filter) {
    try {
      return await this.CityRepository.getAllCity({ data: filter.data });
    } catch (err) {
      console.log("Error in CityService - getCity");
      throw err;
    }
  }

  async updateCity(cityid, data) {
    try {
      const response = await this.CityRepository.updateCity(cityid, data);
      return response;
    } catch (err) {
      console.log("Error in CityService - updateCity");
      throw err;
    }
  }

  async deleteCity(cityid) {
    try {
      const response = await this.CityRepository.deleteCity(cityid);
      return response;
    } catch (err) {
      console.log("Error in CityService - deleteCity");
      throw err;
    }
  }

  async getCity(cityid) {
    try {
      const response = await this.CityRepository.getCity(cityid);
      return response;
    } catch (err) {
      console.log("Error in CityService - getCity");
      throw err;
    }
  }
}

module.exports = CityService;
