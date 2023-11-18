const pool = require('../../db');
const queries = require('./queries');
const getAttendance = (req, res) => {
  const { sortBy, filterByCourse } = req.query;

  // Convert to lowercase for case-insensitive comparison
  const lowerCaseSortBy = sortBy ? sortBy.toLowerCase() : sortBy;
  const lowerCaseFilterByCourse = filterByCourse ? filterByCourse.toLowerCase() : filterByCourse;
  let query;
  let values = [];

  if (lowerCaseSortBy === "name") {
      query = queries.getAttendanceSortedByName;
  } else if (lowerCaseSortBy === "time") {
      query = queries.getAttendanceSortedByTime;
  } else if (lowerCaseFilterByCourse) {
      query = queries.getAttendanceFilteredByCourse;
      values = [lowerCaseFilterByCourse];
  } else {
      query = queries.getAttendance; // Default query
  }

  pool.query(query, values, (error, results) => {
      if (error) {
          console.error(error);
          return res.status(500).json({ error: 'An error occurred while fetching attendance records.' });
      }
      res.status(200).json({ success: true, message: 'Attendance records fetched successfully', data: results.rows });
  });
};


const getAttendanceByName = (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.status(400).json({ error: 'Name parameter is missing.' });
  }

  pool.query(queries.getAttendanceByName, [name], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred while fetching attendance records by name.' });
    }
    if (results.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'No attendance records found for the specified name.' });
    }
    res.status(200).json({ success: true, message: 'Attendance records fetched successfully', data: results.rows });
  });
};

const addAttendance = async (req, res) => {
  try {
    const { name, course, matric_number } = req.body;

    // Validate input
    if (!name || !course || !matric_number) {
      return res.status(400).json({ error: 'Missing or invalid input. Please provide name, course, and matric_number.' });
    }
    //Check if name contains only letters
    if(!/^[A-Za-z\s]+$/.test(name)){
        return res.status(400).json({success:false, error:'Name should only contain letters.'});
    }
    // Check if matric_number exists
    const existingRecords = await pool.query(queries.checkMatricNumberExists, [matric_number]);
    if (existingRecords.rows.length > 0) {
      return res.status(400).json({ success: false, error: 'Matric number already exists.' });
    }

    // Add student to the database with the current timestamp
    const currentTime = new Date();
    await pool.query(queries.addAttendance, [name, course, matric_number, currentTime]);

    // Retrieve the newly created record
    const newRecord = await pool.query(queries.getAttendanceByName, [name]);
    res.status(201).json({ success: true, message: 'Student created successfully', data: newRecord.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'An error occurred while adding the attendance record.' });
  }
};

module.exports = {
  getAttendance,
  getAttendanceByName,
  addAttendance,
};