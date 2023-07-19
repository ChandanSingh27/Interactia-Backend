const app = require('./app.js')
const DatabaseConnection = require('./Database/dbConnection.js')

DatabaseConnection()

app.listen(5000,()=>{
        console.log('server started....');
})