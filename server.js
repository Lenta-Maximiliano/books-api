const { existsSync } = require("node:fs");
const { loadEnvFile } = require("node:process");

if (process.env.NODE_ENV !== "production" && existsSync(".env")) {
  loadEnvFile(".env");
}

const express = require("express");
const booksRouter = require("./routes/books");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Books API",
    endpoints: {
      books: "/api/books",
    },
  });
});

app.use("/api/books", booksRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});