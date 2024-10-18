const express = require('express');
const connectDB = require('./config/db');
const comicBooks = require('./routes/comicBooks');

const app = express();
connectDB();

app.use(express.json()); // Middleware to parse JSON
app.use('/api/comic-books', comicBooks); // Route handler for comic book API

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
