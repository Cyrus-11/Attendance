const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getAttendance);
router.get('/search', controller.getAttendanceByName); // Changed the route to use name instead of id
router.post('/', controller.addAttendance);

module.exports = router;