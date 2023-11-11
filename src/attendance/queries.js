const getAttendance = "SELECT * FROM attendance";
const getAttendanceByName = "SELECT * FROM attendance WHERE name = $1"; // Modified query
const checkMatricNumberExists = "SELECT s FROM attendance s WHERE s.matric_number = $1";
const addAttendance = "INSERT INTO attendance (name, course, matric_number, time) VALUES ($1, $2, $3, $4)";
const getAttendanceSortedByName = "SELECT * FROM attendance ORDER BY name";
const getAttendanceSortedByTime = "SELECT * FROM attendance ORDER BY time";
const getAttendanceFilteredByCourse =`SELECT * FROM attendance WHERE LOWER(course) = LOWER($1)`;




module.exports = {
    getAttendance,
    getAttendanceByName, // Added the new query
    checkMatricNumberExists,
    addAttendance,
    getAttendanceSortedByName,
    getAttendanceSortedByTime,
    getAttendanceFilteredByCourse 
};
