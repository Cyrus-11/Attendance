/**
 * @swagger
 * components:
 *   schemas:
 *     Attendance:
 *       type: object
 *       required:
 *         - name
 *         - course
 *         - matric_number
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the attendance record
 *         name:
 *           type: string
 *           description: The name associated with the attendance record
 *         course:
 *           type: string
 *           description: The course associated with the attendance record
 *         matric_number:
 *           type: string
 *           description: The matriculation number associated with the attendance record
 *         time:
 *           type: string
 *           format: date-time
 *           description: >
 *             The timestamp indicating the time of attendance
 *             (default: current timestamp)
 */

/**
 * @swagger
 * tags:
 *   name: Attendance
 *   description: API for managing attendance records
 * /api/v1/attendance:
 *   get:
 *     summary: Retrieve all attendance records
 *     tags: [Attendance]
 *     parameters:
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Sort the results by name, time, or course (optional)
 *       - in: query
 *         name: filterByCourse
 *         schema:
 *           type: string
 *         description: Filter the results by course (optional)
 *     responses:
 *       200:
 *         description: List of all attendance records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Attendance'
 *       404:
 *         description: No attendance records found
 *       500:
 *         description: Internal Server Error
 *   post:
 *     summary: Add a new attendance record
 *     tags: [Attendance]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Attendance'
 *     responses:
 *       201:
 *         description: Successfully added the attendance record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Attendance'
 *       400:
 *         description: Bad request, invalid input
 *       500:
 *         description: Internal Server Error
 * /api/v1/attendance/search:
 *   get:
 *     summary: Retrieve attendance records by name
 *     tags: [Attendance]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: The name to search for in attendance records
 *     responses:
 *       200:
 *         description: List of attendance records matching the provided name
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Attendance'
 *       404:
 *         description: No attendance records found for the provided name
 *       500:
 *         description: Internal Server Error
 */
const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getAttendance);
router.get('/search', controller.getAttendanceByName); // Changed the route to use name instead of id
router.post('/', controller.addAttendance);

module.exports = router;