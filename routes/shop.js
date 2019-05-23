const path = require('path');
const express = require('express');
const router = express.Router();


const rootdir = require('../util/path');

//use allow to add middlware function
router.get('/', (req, res, next) => {
    //res.send('<h>Hello from express</h>')
    res.sendFile(path.join(rootdir, 'views', 'shop.html'))
    //next();//allows the request to continue to the next middleware line
});

module.exports = router; 