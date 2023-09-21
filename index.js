const express = require("express");
const books = require("./assets/books.json");
// dotenv
// import express from "express";
// import books from "./assets/books.json" assert { type: "json" };

const app = express();
// cofiguracion dotenv aqui
app.use(express.json());

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).send("Hola mundo");
});

// ruta para books
app.get("/books", (req, res) => {
  // devolver todos los libros
  res.status(200).json(books);
});

app.listen(port, () => {
  console.log(`el servidor corriendo en el puerto ${port}!`);
});
