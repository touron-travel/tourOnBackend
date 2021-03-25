const mongoose = require("mongoose");

const express = require("express");

const router = express.Router();

const City = mongoose.model("City");

// get City
router.get("/city", async (req, res) => {
  if (req.query.page && req.query.pageSize) {
    const pageSize = parseInt(req.query.pageSize);
    const page = parseInt(req.query.page);
    const city = await City.find()
      .skip((page - 1) * 10)
      .limit(pageSize);
    console.log("City route called");
    res.send(city);
  } else {
    const city = await City.find();

    console.log("City route called");
    res.send(city);
  }
});

// router.get("/city/:id", async (req, res) => {
//   console.log(req.params, "id vanthuruchu");
//   const city = await City.findById({ _id: req.params.id });
//   res.send(city);
// });

//Get City by Name

router.get("/city/countryname/:name", async (req, res) => {
  console.log(req.params);
  const city = await City.find({ countryName: req.params.name });
  res.send(city);
});

router.get("/city/cityname/:name", async (req, res) => {
  console.log(req.params);
  const city = await City.find({ cityName: req.params.name });
  res.send(city);
});

//Post city
router.post("/city", async (req, res) => {
  try {
    // const { name, coordinates, description, journeyType ,imageUrl} = req.body;
    // console.log(name, coordinates, description, journeyType);
    console.log(req.body);
    const city = new City(req.body);

    await city.save();
    res.json({ city: city }).status(200);
  } catch (err) {
    res.send(err);
  }
});

//single city to edit
router.get("/city/edit/:id", async (req, res) => {
  const city = await City.findById({ _id: req.params.id });
  res.send(city);
});

// Update City

router.post("/city/edit/:id", async (req, res) => {
  let city = await City.findById({ _id: req.params.id });
  console.log(req.body);
  city.cityName = req.body.cityName;
  city.countryName = req.body.countryName;
  city.aboutCity = req.body.aboutCity;
  city.imageUrl = req.body.imageUrl;
  city.idealDays = req.body.idealDays;
  city.weather = req.body.weather;
  city.famousPlacesToVisit = req.body.famousPlacesToVisit;
  (city.coordinates = {
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  }),
    (city.travelDuration = req.body.travelDuration);
  city.airportType = req.body.airportType;
  city.airportName = req.body.airportName;
  console.log(city);
  city.save();
  res.json({ city: city }).status(200);
});

//Delete by id

router.post("/city/delete/:id", async (req, res) => {
  const city = await City.findByIdAndDelete({ _id: req.params.id });
  res.send(city);
});

module.exports = router;
