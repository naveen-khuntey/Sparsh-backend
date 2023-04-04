const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(cors({
    origin: '*'
}))
app.use(express.json());
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.json("fg");
})

app.post("/", (req, res) => {
    const data = req.body;
    console.log(data);
    console.log("success");
});

app.listen(8000, () =>{
    console.log("server at 8000");
})
