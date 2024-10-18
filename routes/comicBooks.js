const express = require('express');
const router = express.Router();
const comicBookController = require('../controllers/comicBookController');

// Route to create 
router.post('/', comicBookController.createComicBook);

// Route to update 
router.put('/:id', comicBookController.updateComicBook);

// Route to delete 
router.delete('/:id', comicBookController.deleteComicBook);

// Route to get a list 
router.get('/', comicBookController.getComicBooks);

// Route to get details of a book by ID
router.get('/:id', comicBookController.getComicBookById);

module.exports = router;
