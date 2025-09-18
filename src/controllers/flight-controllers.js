const { flightservice } = require("../services/index");
const {ClientError , ServerErrorCodes, SucessCodes} = require("../utils/error-handle");

const create = async (req, res) => {
  try {
    //why we do this because it is good practice to check it should have th
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
    };

    // Pass request body directly to service
    const flight = await flightservice.createFlight(flightRequestData);

    return res.status(SucessCodes.OK).json({
      data: flight,
      success: true,
      error: {},
      message: "Flight created successfully",
    });
  } catch (err) {
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Failed to create flight",
      error: err,
    });
  }
};
const getAll = async (req, res) => {
  try {
    const flights = await flightservice.getAllFlight(req.query);

    return res.status(SucessCodes.OK).json({
      data: flights,
      success: true,
      error: {},
      message: "Flights fetched successfully",
    });
  } catch (err) {
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Failed to fetch flights",
      error: err,
    });
  }
};

module.exports = {
  create,
  getAll,
};
