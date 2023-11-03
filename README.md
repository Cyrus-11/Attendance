# Attendance Logging App

## Overview

The Attendance Logging App is a simple Node.js and Express.js application for logging and managing attendance records. It allows you to add attendance records, search for records by name, and store them in a PostgreSQL database. This README provides an overview of the project, how to set it up, and how to use it.

## Features

- Create new attendance records with student details.
- Search for attendance records by name.
- Store records in a PostgreSQL database.
- Sort and filter records by name or time.
- Handle errors and edge cases gracefully.

## Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/Attendance.git
   cd attendance-logging-app
2. **Install Dependencies**:
   npm install
3. **Set Up the PostgreSQL Database**:
    Create a PostgreSQL database and update the database connection settings in
   `db.js`.
4. **Run the Application**:
   npm start
5. **API Endpoints**:
    `POST /attendance`: Add an attendance record.
    `GET /attendance`: Get all attendance records.
    `GET /attendance/search?name=John`: Search attendance records by name.
    `GET /attendance?sortBy=name`: Sort records by name.
    `GET /attendance?sortBy=time`: Sort records by time.
    `GET /attendance?filterByClass=Math101`: Filter records by class.






   
