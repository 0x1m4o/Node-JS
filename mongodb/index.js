// Import Express
const express = require('express');
// Import Morgan 
const morgan = require('morgan');
// Import Mongoose 
const mongoose = require('mongoose');

// Import Routes
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

const dbUrl = 'mongodb+srv://chandra:chandra123@cluster0.az91tgt.mongodb.net/nodejs?retryWrites=true&w=majority'

// Connect to mongodb
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true}).then((result)=> {
    console.log('server is ready');
    // listen for requests if connection is ready
    app.listen(3000);
  }
).catch((err)=>
  console.log(err)
)

// register view engine
app.set('view engine', 'ejs');

// create a static folder in web browser 
app.use(express.static('public'))

// create a middleware to view the request and response
app.use(morgan('dev'));

// create a static folder in web browser 
app.use(express.urlencoded({extended: true}))


app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/', (req, res)=>{
  res.redirect('/blogs');
});

// Blog Routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
