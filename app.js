const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const attendanceRoutes = require("./src/attendance/routes");


// CDN CSS

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui.min.css";

const app = express();
const port = 5001;

// Enable CORS for all routes
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Define root route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Define attendance routes
app.use("/api/v1/attendance", attendanceRoutes);

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Attendance Logging App",
      version: "1.0.0",
      description: "A simple Express Attendance Logging App",
    },
    servers: [
      {
        url: "http://localhost:5001",
      },
      {
        url: "https://attendance-cyrus-11.vercel.app/",
      },
    ],
  },
  apis: ["./src/attendance/*.js"],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

// Serve Swagger UI
app.use(
"/api-docs", 
swaggerUi.serve, 
swaggerUi.setup(swaggerSpec,{ customCssUrl: CSS_URL })
);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
