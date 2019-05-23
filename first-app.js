const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));


//take any request tries to find some files by look its extenstion .js or .css
//and its automatically forwards to public floder
app.use(express.static(path.join(__dirname, 'public')));//static middleware
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//use will handle all hppt request i.e get,post
app.use((req, res, next) => {
    //res.status(404).send('<h1>404</h1><h3>Page not found</h3>')
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000, () => {
    console.log('server started at the port 3000');
})