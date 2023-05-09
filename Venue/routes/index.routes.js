const router = require('express').Router();

const venueRouter = require('./venue.routes');
const reviewRouter = require('./review.routes');
const bookingRouter = require('./booking.routes');
const dashboardRouter = require('./dashboard.routes');

router.use('/venues', venueRouter);
router.use('/reviews', reviewRouter);
router.use('/bookings', bookingRouter);
router.use('/dashboard', dashboardRouter);

module.exports = router;
