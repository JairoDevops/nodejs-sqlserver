const express = require('express')
const cors = require('cors');

const { getConection  } = require('../Db/config');

class server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths ={
            user :"/api/user",
        }

        this.conectarDB();
        
        this.routes();


    }

    async conectarDB() {
        try {
            await getConection();
            console.log("Connected to database successfully");
        } catch (error) {
            console.error("Error connecting to database:", error);
        }
    }


    routes(){
        this.app.use(this.paths.user , require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`arrancando en el puerto ${this.port}`)
        })
    }

}
module.exports = server;