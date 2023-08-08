const express = require('express');

const blogController = require('../controllers/blogController');


const router = express.Router();

// Create the blog | GET
router.get('/create', blogController.blog_create_get);

// Get the blog | GET
router.get('/', blogController.blog_index);

// Post the blog | POST
router.post('/', blogController.blog_create_post);
  
// Blog Detail | GET
router.get('/:id', blogController.blog_details);
  
// Blog Delete | DELETE
router.delete('/:id', blogController.blog_delete);
  
module.exports = router;