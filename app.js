require("dotenv").config();
require("./models/City");
require("./models/Place");
require("./models/Country");
require("./models/VisaDetails");
require("./models/TourIdea");
require("./models/Blog");
require("./models/Banner");
require("./models/States");
require("./models/DomesticCity");
require("./models/CompanyStats");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const cityRoute = require("./routes/cityRoutes");
const PlaceRoute = require("./routes/placeRoute");
const CountryRoute = require("./routes/countryRoutes");
const TourIdeaRoute = require("./routes/tourIdeaRoute");
const VisaRoute = require("./routes/VisaRoutes");
const BlogRoute = require("./routes/BlogRoutes");
const BannerRoute = require("./routes/BannerRoutes");
const StateRoute = require("./routes/StateRoute");
const DomesticCityRoute = require("./routes/DomesticCityRoute");
const CompanyStats = require("./routes/CompanyStats");
const app = express();

// for production only
const helmet = require("helmet");
const compression = require("compression");

app.use(helmet());
app.use(compression());

const corsObj = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 200,
};
//using the cors obj
app.use(cors(corsObj));

app.use(bodyParser.json());
app.use(cityRoute);
app.use(PlaceRoute);
app.use(CountryRoute);
app.use(TourIdeaRoute);
app.use(VisaRoute);
app.use(BlogRoute);
app.use(StateRoute);
app.use(BannerRoute);
app.use(DomesticCityRoute);
app.use(CompanyStats);
const mongodbUri =
  "mongodb+srv://vicky:aamecvicky123@cluster0-knxey.mongodb.net/city?retryWrites=true&w=majority";

mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mngo", err);
});

app.get("/", (req, res) => {
  res.send("Welcome to touron-api");
  console.log("Hello world");
});
app.listen(process.env.PORT || 3000, () => console.log("Running on 3000"));
