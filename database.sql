CREATE DATABASE attendance_database;

CREATE TABLE attendance (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  course VARCHAR(255) NOT NULL,
  matric_number VARCHAR(255) NOT NULL,
  time TIMESTAMPTZ DEFAULT NOW()
);
