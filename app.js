const express = require("express");
const attendanceRoutes = require ('./src/attendance/routes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require("swagger-jsdoc");
const app = express();

const port = 5001;

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello world");
});
app.use('/api/v1/attendance', attendanceRoutes);

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
         title: "Attendance Logging App",
         version: "1.0.0",
         description: "A simple Express Attendance Logging App"   
        },
        servers: [
            {
                url: "http://localhost:5001"
            }
        ],
    },
    apis: ["./src/attendance/*.js"],
}

const spacs = swaggerJsDoc(options)
app.use("/api-docs", 
swaggerUi.serve, 
swaggerUi.setup(spacs))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})