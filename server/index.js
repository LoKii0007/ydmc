require('dotenv').config()
const express = require("express")
const Connection = require("./db.js")
const cors = require("cors")
const expressCors = require("express-cors")
const Routes = require("./routes/route.js")
const bodyParser = require("body-parser")


const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };

Connection()
const app = express()
const PORT = 8000


// Allow preflight requests from any origin
app.use(cors())
app.use(bodyParser.json({ limit: '10mb' , extended: true}));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static("public"));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// ----routes
app.use('/', Routes)


app.listen(PORT, ()=>{
    console.log(`listeneing to port ${PORT}`)
})
