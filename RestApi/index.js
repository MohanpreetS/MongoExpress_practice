const path = require('path');
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid'); //For generating ID's
const express = require('express');
const app = express();

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response ")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})



















