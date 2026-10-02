const express = require("express");
require('dotenv').config();
var morgan = require('morgan');
const contactRoute = require("./routes/contact");
const mongoose = require("mongoose")
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use('/api/contact',contactRoute);

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Database is connected...");
    
    app.listen(process.env.PORT , ()=>{
    console.log("portfolio is running on port "+ process.env.PORT);
    
})
})

