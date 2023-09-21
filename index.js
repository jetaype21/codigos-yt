import express from "express";
import books from "./assets/books.json" assert { type: "json" };
import dotenv from "dotenv";

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
