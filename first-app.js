const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController= require('./controllers/error');
const app = express();

/**
 * handlebar template
 */
//const expressHds = require('express-handlebars');
// app.engine('hbs',
//     expressHds({
//         layoutsDir: 'views/layouts/',
//         defaultLayout: 'main-layout',
//         extname: 'hbs'
//     })
//     );

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
//take any request tries to find some files by look its extenstion .js or .css
//and its automatically forwards to public floder
app.use(express.static(path.join(__dirname, 'public')));//static middleware

app.use('/admin', adminRoutes);
app.use(shopRoutes);

//use will handle all hppt request i.e get,post
app.use(errorController.get404)

app.listen(3000, () => {
    console.log('server started at the port 3000');
})