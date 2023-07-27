const express = require('express');
const router = express.Router();
const appController = require('../controllers/AppController');

router.get('/cities', async (req, res, next) => {
  try {
    const cities = await appController.getCities();
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching cities.' });
  }
});

router.get('/countries', async (req, res, next) => {
  try {
    const countries = await appController.getCountries();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching countries.' });
  }
});

router.get('/currencies', async (req, res, next) => {
  try {
    const currencies = await appController.getCurrencies();
    res.status(200).json(currencies);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching currencies.' });
  }
});

router.get('/hotels', async (req, res, next) => {
  try {
    const hotels = await appController.getHotels();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching hotels.' });
  }
});

router.get('/hotels-optional-values', async (req, res, next) => {
  try {
    const hotels = await appController.getHotelsWithOptionalValues();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching hotels with optional values.' });
  }
});

router.get('/hotel-details', async (req, res, next) => {
  try {
    const hotelDetails = await appController.getHotelDetails();
    res.status(200).json(hotelDetails);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching hotel details.' });
  }
});


module.exports = router;
