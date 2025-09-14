// airplane-repository.js
const { Airplane } = require('../models'); 

class airplaneRepository {
    async getAirplane(id) {
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (err) {
            console.log("Something went wrong in repository");
            throw err;
        }
    }
}

module.exports = airplaneRepository;
