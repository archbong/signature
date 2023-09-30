const config = require('./config/env');
const http = require('http');
const app = require('./express');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const server = http.createServer(app);

mongoose.Promise = global.Promise
mongoose.set('strictQuery', false);
mongoose.connect(config.development.database_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('error', () => {
  if('error') throw new Error(`unable to connect to database: ${config.development.database_url}`)
  console.log(`connected to database: ${config.development.database_url}`)
})

const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
  });
  
  io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);
  
    // We can write our socket event listeners in here...
  });


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello Server...'})
})


server.listen(config.development.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.development.port)
})