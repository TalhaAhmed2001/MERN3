//Data Source=TALHACOOL01\SQLEXPRESS;Initial Catalog=Portal;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False

require('dotenv').config()

//const sql = require("mssql");

const config = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: "Portal",
    driver: 'msnodesqlv8',
    options: {
        trustServerCertificate: true,
        trustedconnection: false,
        enableArithAbort: true,
        instancename: "SQLEXPRESS",
    },
    port: 1433
};

module.exports = {
    config
}