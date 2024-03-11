# Key Points about EJS:

- **Templating Engine for Node.js:** EJS simplifies the creation of dynamic HTML pages in Node.js applications by separating HTML structure from server-side logic.

- **Easy to Use:** EJS leverages JavaScript syntax within template files, making it familiar for developers with JavaScript experience.

- **Data Binding:** EJS enables you to pass data (variables, arrays, objects) from your Node.js application to your templates, dynamically generating content.

- **Control Flow Statements:** You can incorporate conditional statements (if, else) and loops (for, each) within EJS templates to control the flow of content based on data or logic.

- **Partials:** EJS supports creating reusable template components (partials) that can be included in multiple templates, promoting code organization and maintainability.

- **Security Considerations:** Be cautious when using user-provided data within EJS templates, as it can introduce potential security vulnerabilities like Cross-Site Scripting (XSS). Always sanitize or escape untrusted input before rendering it in templates.

## Code Example:

1. **Set up a Node.js project:**
   - Create a project directory and initialize it with `npm init -y`.
   - Install the ejs package using `npm install ejs`.

2. **Create an EJS template (index.ejs):**

```html
<!DOCTYPE html>
<html>
<head>
    <title>EJS Example</title>
</head>
<body>
    <h1>Welcome, <%= name %>!</h1>
    <ul>
        <% for (let item of items) { %>
            <li><%= item %></li>
        <% } %>
    </ul>
</body>
</html>
```
3. **Create a Node.js script (server.js):** 

```javascript
const express = require('express');
const ejs = require('ejs');

const app = express();
const port = 3000;

// Data to be passed to the template
const data = {
    name: 'John Doe',
    items: ['Item 1', 'Item 2', 'Item 3']
};

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Route to render the index.ejs template
app.get('/', (req, res) => {
    res.render('index', data); // Pass data to the template
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

```
## Explanation:

- The `index.ejs` template defines the basic HTML structure.

- The `<%= %>` syntax is used to embed JavaScript expressions within the template.

- The `name` variable and `items` array are dynamically inserted into the HTML using data binding.

- The `server.js` script creates an Express app, sets EJS as the view engine, and defines a route (`/`) to render the `index.ejs` template with the provided data.

- When you run the Node.js script and visit [http://localhost:3000/](http://localhost:3000/) in your browser, you'll see the rendered HTML with the values from the data object. This demonstrates how EJS simplifies the creation of dynamic web pages in Node.js.
