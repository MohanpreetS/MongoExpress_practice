const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('tiny'));


app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})