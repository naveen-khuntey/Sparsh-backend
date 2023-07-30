const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongooseInit = require('./config/mongoose');
const appointmentRouter = require('./router/appointments/resolver')
const dontionRouter = require('./router/donations/resolver')
require('dotenv').config();
const app = express();
mongooseInit();

app.use(cors({
    origin: '*'
}))
app.use(express.json());
app.use(bodyParser.json());
app.get('/',(req,res) => {
    res.status(200).end("Sanity Check : OK");
})

app.use('/appointment', appointmentRouter);
app.use('/donation', dontionRouter);
const port = process.env.PORT || 8000 ;
app.listen(port, () =>{
    console.log(`server at ${port}`);
})
