const express = require('express');
const router = express.Router();
const appController = require('../controllers/AppController');


router.get('/', async (req, res, next) => {
    try {
      const guestsIds = await appController.getGuestsIds();
      res.status(200).json(guestsIds);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching guests ids.' });
    }
  });

module.exports = router;
