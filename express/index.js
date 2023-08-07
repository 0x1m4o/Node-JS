const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log(req.url);

    res.sendFile('./views/index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    console.log(req.url);

    res.sendFile('./views/about.html', {root: __dirname})
})

app.get('/about-us', (req, res) => {
    console.log(req.url);

    res.redirect('/about');
})

app.use((req, res) => {
    res.sendFile('/views/404.html', {root: __dirname});
});

app.listen(3000, ()=> {
    console.log('listening for requests on port 3000\nhttp://localhost:3000' );
});