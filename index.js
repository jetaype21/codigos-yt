const express = require("express");
const dotenv = require("dotenv");
const books = require("./assets/books.json");

const app = express();
dotenv.config();
app.use(express.json());

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.status(200).send("Hola mundo");
});

// ruta para books
app.get("/books", (req, res) => {
  // devolver todos los libros
  return res.status(200).json(books);
});

app.listen(port, () => {
  console.log(`el servidor corriendo en el puerto ${port}!`);
});
