const app = require('./app.js')
const DatabaseConnection = require('./Database/dbConnection.js')

DatabaseConnection()

app.listen(process.env.PORT,()=>{
        console.log('server started....');
})