const express = require('express');
const morgan = require('morgan');
const app = express ();
const staticDataRoutes = require('./api/routes/staticData');
const searchRoutes = require('./api/routes/search');
const bookingRoutes = require('./api/routes/booking');
const bookingManagementRoutes = require('./api/routes/bookingManagement');
const guestsRoutes = require('./api/routes/guestAndLoyalty');

app.use(morgan('dev'));

app.use('/staticData',staticDataRoutes);
app.use('/search',searchRoutes);
app.use('/booking',bookingRoutes);
app.use('/bookingManagement',bookingManagementRoutes);
app.use('/guests',guestsRoutes);


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404 ;
    next(error);
})



app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
})

module.exports = app;
