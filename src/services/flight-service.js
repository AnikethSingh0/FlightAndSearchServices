const {flightRepository,airplaneRepository}= require('../repository/index')
const {dateTime} = require('../utils/helper')

class FlightService{
    constructor(){
        this.flightrepository = new flightRepository();
        this.airplanerepository = new airplaneRepository();
    }
    async createFlight(data){
        try {
            if(!dateTime(data.departureTime,data.arrivalTime)){
                throw {error: "arrivalTime time is lesser than departureTime"}
            }
            const { airplaneId } = data;
            const airplane = await this.airplanerepository.getAirplane(airplaneId);
            if (!airplane) throw new Error("Airplane not found");
            const flight = await this.flightrepository.flightCreate({
                ...data,
                totalSeats: airplane.capacity
            });
            return flight;
        } catch (err) {
            console.log("Error in flightService - createFlight", err);
            throw err;
        }
    }
    async getAllFlight(data){
        try {
            const flight = this.flightrepository.getAllFlight(data)
            return flight;
        } catch (err) {
            console.log("Error in flightService - createFlight", err);
            throw err;
        }
    }
}
module.exports = FlightService;