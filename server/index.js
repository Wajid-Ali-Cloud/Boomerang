const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
const connectDB = require("./db.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

const flightRoutes = require("./routes/api/flights.js");
const userRoutes = require("./routes/api/users.js");
const reservationRoutes = require("./routes/api/reservations.js");
const paymentRoutes = require("./routes/api/payment.js");

connectDB();
app.use("/api/flight", flightRoutes);
app.use("/api/user", userRoutes);
app.use("/api/reservation", reservationRoutes);
app.use("/api/payment", paymentRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));
