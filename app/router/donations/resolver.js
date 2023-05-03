const express = require('express');
const datasources = require('./datasources');

const router = express.Router();

router.get('/:appId', async (req, res) => {
    const {appId} = req.params;
    try {
        const donation = await datasources.find(appId);
        res.json(donation);
    } catch (error) {
        res.end('Internal server error');
    } 
});

router.post('/', async (req, res) => {
    const donation = req.body;
    try {
        const createDonation = await datasources.create(donation);
        console.log(createDonation);
        res.json(createDonation);
    } catch (error) {
        res.json(error);
    }
})
module.exports = router;