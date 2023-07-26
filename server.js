const app = require('./app.js')
const DatabaseConnection = require('./Database/dbConnection.js')

DatabaseConnection()

const server = app.listen(process.env.PORT,()=>{
        console.log('server started....');
})

const io = require('socket.io')(server)
        
io.on('connection',(socket)=>{

})
