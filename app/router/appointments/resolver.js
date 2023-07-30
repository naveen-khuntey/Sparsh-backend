const express = require('express');
const datasources = require('./datasources');

const router = express.Router();


router.get('/',async (req,res)=>{
    const data = await datasources.find1();
    if(data) res.send(data);
    else res.send({none : "ok"});
})
router.get('/:appId', async (req, res) => { 
    const {appId} = req.params;
    try {
        const appointment = await datasources.find(appId);
        res.json(appointment);
    } catch (error) {
        res.end('Internal server error');
    }
});

router.post('/', async (req, res) => {
    const appointment = req.body;
    try {
        const createAppointment = await datasources.create(appointment);
        console.log(createAppointment);
        res.json(createAppointment);
    } catch (error) {
        res.json(error);
    }
})
module.exports = router;