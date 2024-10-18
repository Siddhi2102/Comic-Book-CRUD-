const express = require('express');
const router = express.Router();
const comicBookController = require('../controllers/comicBookController');

// Route to create a comic book
router.post('/', comicBookController.createComicBook);

// Route to update a comic book
router.put('/:id', comicBookController.updateComicBook);

// Route to delete a comic book
router.delete('/:id', comicBookController.deleteComicBook);

// Route to get a list of comic books with pagination and filters
router.get('/', comicBookController.getComicBooks);

// Route to get details of a single comic book by ID
router.get('/:id', comicBookController.getComicBookById);

module.exports = router;
