const express = require('express');
const router = express.Router();
const appController = require('../controllers/AppController');

router.get('/minimum-rates', async (req, res, next) => {
    try {
      const minimumRates = await appController.getMinimumRates();
      res.status(200).json(minimumRates);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching minimum rates.' });
    }
  });
  
  router.get('/full-rates', async (req, res, next) => {
    try {
      const fullRates = await appController.getFullRates();
      res.status(200).json(fullRates);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching full rates.' });
    }
  });


module.exports = router;
