const sql = require('mssql');


const dbSettings = {
    user : "sa",
    password : "yourStrong(#)Password",
    server : "localhost",
    database : "psi",
    options : {
        encrypt: false,
        trustServerCertificate: true
    }

}


const getConection = async () =>{
    try {
        const pool = await sql.connect(dbSettings)
        const result = await pool.request().query("SELECT GETDATE()")
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
module.exports = { getConection };


