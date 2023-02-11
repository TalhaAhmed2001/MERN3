const config = require("./db")
const sql = require("mssql")

const { connect } = require('mssql/msnodesqlv8')
//var mssql = require('mssql/msnodesqlv8')

exports.check = async (req, res) => {
    var result = "done"
    console.log("hello1")
    //let pool = mssql.connect(config)

    const pool = new sql.ConnectionPool(config);
    const poolConnect = pool.connect();

    console.log("hello2")
    const getTable = async () => {
        await poolConnect;
        try {
            const result = await pool.request()
                .query('select * from admin_table;');
            return {
                result: result.recordset,
                err: null
            };
        } catch (err) {
            return {
                result: null,
                err
            };
        }
    };

    console.log(await getTable());
}