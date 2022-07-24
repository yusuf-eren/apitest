const express = require("express");
const mongoose = require("mongoose");
const app = express();
const fetch = require("node-fetch");
const Location = require("./models/Location.js");

mongoose
  .connect(
    "mongodb+srv://yusuf:allah1@etsyfetch.vaunvnx.mongodb.net/location_test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected To Database");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/location", async (req, res, next) => {
  try {
    const driver_id = req.body.driver_id;
    const test = req.body;
    const isc = await Location.findById({ _id: driver_id });
    if (!isc) {
      await Location.create(req.body);
      console.log(test);
      res.status(200).json({
        status: "success",
        test,
      });
    } else if (isc) {
      await isc.update({longitude:req.body.longitude},{longitude:req.body.latitude})
    }
  } catch (err) {
    console.log(err);
    res.status(403).json({
      status: "fail",
      err,
    });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`http://localhost`);
});
