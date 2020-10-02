const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('tiny'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})


app.use((req, res, next) => {
    console.log("THIS IS MY FIRST MIDDLEWARE!!!")
    return next();
    console.log("THIS IS MY FIRST MIDDLEWARE - AFTER CALLING NEXT()")
})
app.use((req, res, next) => {
    console.log("THIS IS MY SECOND MIDDLEWARE!!!")
    return next();
})
app.use((req, res, next) => {
    console.log("THIS IS MY THIRD MIDDLEWARE!!!")
    return next();
}) 


app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})