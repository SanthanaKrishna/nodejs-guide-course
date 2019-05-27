exports.get404=(req, res, next) => {
    //res.status(404).send('<h1>404</h1><h3>Page not found</h3>')
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', { pageTitle: 'Page Not Found', path:'/404' })
} 