import express from "express";
import {
  getAllBooks,
  // getBookByISBN,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/books.js";

const router = express.Router();

router.get("/books", getAllBooks);
router.post("/books", createBook);
// router.get("/books/:isbn", getBookByISBN);
router.put("/books/:isbn", updateBook);
router.delete("/books/:isbn", deleteBook);

export default router;
