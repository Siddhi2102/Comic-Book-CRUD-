const ComicBook = require('../models/comicBook');

// Create a new comic book
exports.createComicBook = async (req, res) => {
  try {
    const comicBook = new ComicBook(req.body);
    await comicBook.save();
    res.status(201).send(comicBook);
  } catch (err) {
    res.status(400).send(err.message);
  }
};



// Update a comic book
exports.updateComicBook = async (req, res) => {
  try {
    const comicBook = await ComicBook.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!comicBook) return res.status(404).send('Comic book not found.');
    res.send(comicBook);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// Delete comic book
exports.deleteComicBook = async (req, res) => {
  try {
    const comicBook = await ComicBook.findByIdAndDelete(req.params.id);
    if (!comicBook) return res.status(404).send('Comic book not found.');
    res.send(comicBook);
  } catch (err) {
    res.status(400).send(err.message);

  }
};

// Get list of comic books
exports.getComicBooks = async (req, res) => {
  try {
    const { page = 1, limit = 10, sortBy = 'bookName', order = 'asc', ...filters } = req.query;
    const query = {};

    // Add filtering logic here (like filtering by author, condition, etc.)
    if (filters.authorName) query.authorName = new RegExp(filters.authorName, 'i');
    if (filters.yearOfPublication) query.yearOfPublication = filters.yearOfPublication;

    const comicBooks = await ComicBook.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ [sortBy]: order === 'asc' ? 1 : -1 });

    res.send(comicBooks);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// Get book by ID
exports.getComicBookById = async (req, res) => {
  try {
    const comicBook = await ComicBook.findById(req.params.id);
    if (!comicBook)  return res.status(404).send('Comic book not found.');
    res.send(comicBook);
  } catch (err) {
    res.status(400).send(err.message);

  }
};
