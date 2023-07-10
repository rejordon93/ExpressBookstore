import express from "express";
const app = express();

app.use(express.json());

import ExpressError from "./expressError.js";
import bookRoutes from "./routes/books.js";

app.use("/books", bookRoutes);

/** 404 handler */
app.use((req, res, next) => {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

/** general error handler */
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  return res.json({
    error: err,
    message: err.message,
  });
});

export default app;
