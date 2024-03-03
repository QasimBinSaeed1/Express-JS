# Express.js: A Minimalist Web Framework for Node.js

This document serves as an introduction to Express.js, a popular web framework for Node.js. It addresses frequently asked questions and provides insights into why Express.js is a preferred choice for web development.

## Why Express.js?

- **Minimalist and Flexible:** Express.js offers a clean and flexible core, allowing developers to build web applications tailored to specific needs. Various middleware and libraries can be chosen to extend its functionality.

- **Robust Routing:** Efficiently handle incoming HTTP requests using patterns to map URLs to corresponding functions, known as route handlers.

- **Templating Support:** Seamlessly integrate various templating engines like Pug, EJS, or Handlebars to generate dynamic HTML from server-side data.

- **Large Community:** Benefit from a vast community of developers actively contributing to the framework and sharing resources.

- **Rapid Prototyping:** Quickly build and test small web applications or API endpoints to validate concepts efficiently.

## Why Nodemon?

- **Automatic Server Restart:** Nodemon helps avoid manual server restarts during development by watching for changes in application files and automatically restarting the server.

- **Improved Developer Experience:** Saves time and enhances productivity by eliminating the need to constantly restart the server.

- **Potential Error: nodemon cannot be loaded because running scripts is disabled on this system.**

If you encounter an error stating that nodemon cannot be loaded due to script execution being disabled on your system, you need to address the PowerShell execution policy.

- **Solution:**

1. Run PowerShell as Administrator.

2. Execute the following command to set the execution policy to RemoteSigned for the current user:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

## Installing Express@4

1. Create a new Node.js project directory.

2. Initialize a package.json file:

    ```bash
    npm init -y
    ```

3. Install the Express package using npm or yarn:

    ```bash
    npm install express@4
    ```

    or

    ```bash
    yarn add express@4
    ```

## Request Parameters and Query Strings:

Express.js provides access to request parameters through the `req.params` and `req.query` objects:

- `req.params:` Contains path parameters (defined in route patterns using `:`).

- `req.query:` Stores query string parameters (appended to the URL as key-value pairs after `?`).

## Static Files:

Express.js provides a built-in middleware for serving static files like images, CSS, and JavaScript from a designated public directory. This allows applications to serve both static assets and dynamic content.

**Example Code:**

```javascript
const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route to handle GET requests to the root path
app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
