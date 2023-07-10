import Book from "../models/book.js";

export const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.findAll(req.query);
    return res.json({ books });
  } catch (err) {
    return next(err);
  }
};

export const getBookById = async (req, res, next) => {
  try {
    const book = await Book.findOne(req.params.id);
    return res.json({ book });
  } catch (err) {
    return next(err);
  }
};

export const createBook = async (req, res, next) => {
  try {
    const book = await Book.create(req.body);
    return res.status(201).json({ book });
  } catch (err) {
    return next(err);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    const book = await Book.update(req.params.isbn, req.body);
    return res.json({ book });
  } catch (err) {
    return next(err);
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    await Book.remove(req.params.isbn);
    return res.json({ message: "Book deleted" });
  } catch (err) {
    return next(err);
  }
};
