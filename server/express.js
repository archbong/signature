const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compress = require('compression')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const ms = require("ms")
const enforceSSL = require("express-enforces-ssl");
const app = express()


app.enable("trust proxy");
app.use(enforceSSL());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet.hsts({
    maxAge: ms("1 year"),
    includeSubDomains: true
}));
app.use(cors())
app.use(morgan('short'))

app.use('/api/v1', require('./routes/index.route'))

module.exports =  app