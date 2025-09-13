const { airportservice } = require("../services/index");

const create = async (req, res) => {
  try {
    const airport = await airportservice.createAirport(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully created an airport",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to create airport",
      error: err,
    });
  }
};

const get = async (req, res) => {
  try {
    const airport = await airportservice.getAirport(req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully fetched airport",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to fetch airport",
      error: err,
    });
  }
};

const update = async (req, res) => {
  try {
    const airport = await airportservice.updateAirport(req.params.id, req.body);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully updated airport",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to update airport",
      error: err,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const airport = await airportservice.deleteAirport(req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully deleted airport",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Failed to delete airport",
      error: err,
    });
  }
};

module.exports = {
  create,
  get,
  update,
  destroy,
};
