const { City } = require("../models/index");
const { Op } = require("sequelize");
class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (err) {
      throw err;
    }
  }

  async deleteCity(cityid) {
    try {
      await City.destroy({
        where: {
          id: cityid,
        },
      });
    } catch (err) {
      throw err;
    }
  }

  async updateCity(cityid, data) {
    try {
      // await City.update(data, {
      //     where: {
      //         id: cityid
      //     }
      // });
      const temp = await City.findByPk(cityid);
      temp.name = data;
      return temp;
    } catch (err) {
      console.log("error in updateCity");
      throw err;
    }
  }

  async getCity(cityid) {
    try {
      const city = await City.findByPk(cityid);
      return city;
    } catch (err) {
      console.log("something went wrong in repository");
      throw err;
    }
  }

  async getAllCity(filter) {
    try {
      if (filter.data) {
        const city = await City.findAll({
          where: {
            name: {
              [Op.like]: `${filter.data}%`, 
            },
          },
        });
        return city;
      }
      const city = await City.findAll();
      return city;
    } catch (err) {
      console.log("something went wrong in repository");
      throw err;
    }
  }
}

module.exports = CityRepository;
