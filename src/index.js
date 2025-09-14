const express = require("express");
const CityRepository = require("./repository/city-repository");
const { PORT } = require("./config/serverConfig");
const { urlencoded } = require("body-parser");
const cityRoutes = require("./routes/index");
const { City, Airport } = require("./models/index.js");
const db = require("./models/index.js");
const airportRoutes = require("./routes/v1/airport-routes");
const flightRoutes = require("./routes/v1/flight-routes.js")
const airplane = require("./models/airplane.js");
const setupAndStartServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(urlencoded({ extended: true }));

  app.use("/api", cityRoutes);
  app.use("/api/v1", airportRoutes);
   app.use("/api/v1", flightRoutes);

  // if (process.env.DB_SYNC) {
  //   await db.sequelize.sync({ alter: true });
  //   console.log("✅ Database synced");
  // }

  app.listen(PORT, async () => {
    console.log(`${PORT} has started..`);

    // const cityWithAirports = await City.findOne({ where: { id: 20 } });
    // const airport = await cityWithAirports.getAirports();
    // await cityWithAirports.createAirport({ name: "dada airport" });

    // console.log(airport);
  });
};

setupAndStartServer();
