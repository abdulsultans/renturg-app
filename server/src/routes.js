const routes = require('express').Router()
const multer = require('multer')
const uploadConfig = require('./config/upload')
const upload = multer(uploadConfig)

const { addUser, userLogin } = require('./controllers/UserController');
const DashboardController = require('./controllers/DashboardController')
const SessionController = require('./controllers/SessionController')
const BookingController = require('./controllers/BookingController')
const ApprovalController = require('./controllers/ApprovalController')
const RejectionController = require('./controllers/RejectionController')
const SpotController = require('./controllers/SpotController')

routes.post('/sessions', SessionController.store)

routes.post("/register", addUser);
routes.post("/login", userLogin);

routes.get('/spots', SpotController.index)
routes.post('/spots', upload.single('thumbnail'),SpotController.store)

routes.get('/dashboard', DashboardController.show)

routes.post('/spots/:spot_id/bookings', BookingController.store)

routes.post('/bookings/:booking_id/approvals', ApprovalController.store)
routes.post('/bookings/:booking_id/rejections', RejectionController.store)

module.exports = routes
