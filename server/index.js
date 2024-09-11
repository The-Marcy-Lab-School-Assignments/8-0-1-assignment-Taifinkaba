/** FEEDBACK: Your front end is not being served because you did not remove your dist folder from the gitignore. */
const express = require('express');
const app = express();
// Import the path module to construct the absolute path to the static assets folder
const path = require('path');

// Construct the absolute path to the static assets folder using the `path.join()` method
const pathToDistFolder = path.join(__dirname, '../vite-project/dist');

// "Middleware" Controllers perform server-side logic and then invoke next()

// Prints out information about the request for ALL requests
const logRoutes = (req, res, next) => {
    const time = (new Date()).toLocaleString();
    console.log(`${req.method}: ${req.originalUrl} - ${time}`);
    next();
};

// Use the logging middleware
app.use(logRoutes);

// Create the middleware function for serving static assets
const serveStatic = express.static(pathToDistFolder);

// Use the middleware function to serve static assets
app.use(serveStatic);

// listen on port
const port = 8080;
app.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`);
});