const Pool = require("pg").Pool

// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "attendance_database",
//     password: "password",
//     port: 5432,
// });

const pool = new Pool({
    user: "attendance_9c5r_user",
    host: "dpg-cl4uf7c72pts739n4qv0-a.oregon-postgres.render.com",
    database: "attendance_9c5r",
    password: "V3shgAYFg9nFgaYeExWUMfCx36ZJaK3M",
    port: 5432,
    ssl: { 
        // Set the SSL mode to 'require' or 'prefer'
        rejectUnauthorized: false, // For self-signed certificates; set to true for production certificates
      },
});
console.log(
    "Database connected",
);

module.exports = pool;