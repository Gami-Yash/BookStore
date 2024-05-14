const express = require('express');
const { Book } = require('../module/booksModels.js');

const router = express.Router();

router.use(express.json());

// To add the book in db
router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(500).send({ message: "Input all the necessary fields" });
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const book = await Book.create(newBook);
        res.status(200).send(book); // Sending created book as response
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Book not inserted");
    }
});

// To get all the books from the db
router.get('/', async (req, res) => {
    try {
        console.log('into get method')
        const books = await Book.find();
        return res.json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Books not found');
    }
});

// to update a existing book from the db
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: "Please provide title, author, and publishYear in the request body" });
        }

        const { id } = req.params;
        console.log(id);
        const result = await Book.findByIdAndUpdate(id, req.body);

        if (result) {
            console.log('Book updated successfully');
            res.status(200).send("Book updated successfully");
        } else {
            console.log('Book not updated');
            res.status(500).send("Book not updated");
        }

    } catch (error) {
        console.log(error);
        res.status(500).send("Error updating the book");
    }
});

// to get book according to the id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id); // Changed to findById
        return res.json({
            count: book ? 1 : 0,
            data: book ? [book] : []
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Books not found');
    }
});

// to delete a book
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id); // Changed to Book.findByIdAndDelete

        if (result) {
            console.log('Book deleted');
            res.status(200).send("Book deleted");
        } else {
            console.log('Error deleting a book');
            res.status(500).send("Error deleting a book");
        }

    } catch (error) {
        console.log('Error deleting a book');
        res.status(500).send("Error deleting a book");
    }
});

module.exports = router;
