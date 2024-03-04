import express from "express"

let router = express.Router();

//THese middleware are colled only when this route/url is called from webpage
router.use((req,res,next)=>{
    console.log(`Page is called at ${Date.now()}`)
    next()
})

// Define the home page route
router.get('/', (req, res) => {
  res.send('Blog home page');
});

// Define the about route
router.get('/about', (req, res) => {
  res.send('About blog');
});

// Define the blog post route
router.get('/blogpost/:slug', (req, res) => {
  res.send(`Fetch the blog post for ${req.params.slug}`);
});

export default router;