const mongoose = require("mongoose");

const express = require("express");

const router = express.Router();

const Country = mongoose.model("Country");

// get City
router.get("/country", async (req, res) => {
  if (req.query.page && req.query.pageSize) {
    const pageSize = parseInt(req.query.pageSize);
    const page = parseInt(req.query.page);

    const country = await Country.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    console.log("City route called", country.length);

    res.send(country);
  } else {
    const country = await Country.find();

    console.log("City route called", country.length);

    res.send(country);
  }
});

// router.get("/city/:id", async (req, res) => {
//   console.log(req.params, "id vanthuruchu");
//   const city = await City.findById({ _id: req.params.id });
//   res.send(city);
// });

//Get City by Name

router.get("/country/:name", async (req, res) => {
  console.log(req.params);
  const country = await Country.find({ countryName: req.params.name });
  res.send(country);
});

//Post city
router.post("/country", async (req, res) => {
  try {
    // const { name, coordinates, description, journeyType ,imageUrl} = req.body;
    // console.log(name, coordinates, description, journeyType);
    const country = new Country(req.body);
    await country.save();
    res.json({ country: country });
  } catch (err) {
    res.send(err);
  }
});

//single city to edit
router.get("/country/edit/:id", async (req, res) => {
  console.log(req.body);
  const country = await Country.findById({ _id: req.params.id });
  res.send(country);
});
router.get("/country/:id", async (req, res) => {
  console.log(req.body);
  const country = await Country.findById({ _id: req.params.id });
  res.send(country);
});

// Update City

router.post("/country/edit/:id", async (req, res) => {
  let country = await Country.findById({ _id: req.params.id });
  console.log(req.body);

  country.countryName = req.body.countryName;
  country.aboutCountry = req.body.aboutCountry;
  country.imageUrl = req.body.imageUrl;
  country.weather = req.body.weather;
  country.idealDays = req.body.idealDays;
  country.bestPlaces = req.body.bestPlaces;
  country.countryFlagImage = req.body.countryFlagImage;
  country.visa = {
    onArrival: req.body.onArrival,
    cost: req.body.cost,
  };
  country.general = {
    currency: req.body.currency,
    timeZone: req.body.timeZone,
    bestTimeToVisit: req.body.bestTimeToVisit,
  };
  console.log(country);
  country.save();
  res.json({ country: country });
});

//Delete by id

router.post("/country/delete/:id", async (req, res) => {
  const country = await Country.findByIdAndDelete({ _id: req.params.id });
  res.send(country);
});


module.exports = router;




