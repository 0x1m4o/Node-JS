// Import Express
const express = require('express');
// Import Morgan 
const morgan = require('morgan');
// Import Mongoose 
const mongoose = require('mongoose');
// Import Models 
const Blog = require('./models/blog');

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



app.get('/', (req, res) => {
  // Find all data in the collection, sort, and then pass it to the view | GET
  Blog.find().sort({createdAt : -1}).then((blogs)=>{
    res.render('index', { title: 'Home', blogs });
  }).catch((err)=>console.log(err))
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// Post the blog | POST
app.post('/blogs', (req, res)=>{
  const blog = new Blog(req.body);

  console.log(req.body);

  blog.save().then(
    (result)=> {
      res.redirect('/');
      console.log(result);
  }
  ).catch((err)=>
    console.log(err));

});

// Blog Detail | GET
app.get('/blogs/:id', (req, res)=>{
  const id = req.params.id;
  Blog.findById(id).then((blog)=>res.render('details', {blog, title: 'Blog Detail'})).catch((err)=>console.log(err))
})

// Blog Delete | DELETE
app.delete('/blogs/:id', (req, res)=>{
  const id = req.params.id;
  Blog.findByIdAndDelete(id).then(()=>{res.json({redirect: '/'})}).catch((err)=>console.log(err))
})

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
