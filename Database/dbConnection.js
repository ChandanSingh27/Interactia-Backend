const mongoose = require('mongoose')
require('dotenv/config')

const DatabaseConnection = () => {
        mongoose.connect(process.env.Connection_STRING).then(()=>{
                console.log("Database Connected...")
        }).catch((error) => {
                console.log(`Database error : ${error.message}`)
        })
}

module.exports = DatabaseConnection