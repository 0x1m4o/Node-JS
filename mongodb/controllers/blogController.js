// Import Models 
const Blog = require('../models/blog');

const blog_index = (req,res)=>{    // Find all data in the collection, sort, and then pass it to the view | GET
    Blog.find().sort({createdAt : -1}).then((blogs)=>{
      res.render('index', { title: 'Home', blogs });
    }).catch((err)=>console.log(err))
};
const blog_create_get = (req,res)=>{
    res.render('create', { title: 'Create a new blog' });
};
const blog_details = (req,res)=>{
    const id = req.params.id;
    Blog.findById(id).then((blog)=>res.render('details', {blog, title: 'Blog Detail'})).catch((err)=>console.log(err))
};
const blog_create_post = (req,res)=>{
    const blog = new Blog(req.body);
  
    console.log(req.body);
  
    blog.save().then(
      (result)=> {
        res.redirect('/');
        console.log(result);
    }
    ).catch((err)=>
      console.log(err));
};
const blog_delete = (req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then(()=>{res.json({redirect: '/'})}).catch((err)=>console.log(err))
};

module.exports = {
    blog_index,
    blog_create_get,
    blog_details,
    blog_create_post,
    blog_delete,
}