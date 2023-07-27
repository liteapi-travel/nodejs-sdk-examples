const express = require('express');
const router = express.Router();
const appController = require('../controllers/AppController');

router.get('/pre-book', async (req, res, next) => {
    try {
      const preBookResult = await appController.preBook();
      res.status(200).json(preBookResult);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while pre-booking.' });
    }
  });
  
  router.get('/book', async (req, res, next) => {
    try {
      const bookResult = await appController.book();
      res.status(200).json(bookResult);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while booking.' });
    }
  });

module.exports = router;
