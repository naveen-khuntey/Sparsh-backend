const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongooseInit = require('./config/mongoose');
const appointmentRouter = require('./router/appointments/resolver')
const dontionRouter = require('./router/donations/resolver')

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

app.listen(8000, () =>{
    console.log("server at 8000");
})
