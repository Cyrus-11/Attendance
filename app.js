const express = require("express");
const attendanceRoutes = require ('./src/attendance/routes');
const app = express();
const port = 5001;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.use('/api/v1/attendance', attendanceRoutes);




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})