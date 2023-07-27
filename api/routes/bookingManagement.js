const express = require('express');
const router = express.Router();
const appController = require('../controllers/AppController');


router.get('/booking-list', async (req, res, next) => {
    try {
      const bookingList = await appController.getBookingListByGuestId();
      res.status(200).json(bookingList);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching booking list.' });
    }
  });
  
  router.get('/retrieved-booking', async (req, res, next) => {
    try {
      const retrievedBooking = await appController.retrievedBooking();
      res.status(200).json(retrievedBooking);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching retrieved booking.' });
    }
  });
  
  router.get('/cancel-booking', async (req, res, next) => {
    try {
      const cancelBookingResult = await appController.cancelBooking();
      res.status(200).json(cancelBookingResult);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while canceling booking.' });
    }
  });

module.exports = router;
