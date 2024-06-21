const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const path=require('path');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

app.use(express.static(path.join(__dirname,'./book-store/build')));
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,"./bookk-store/build/index.html"));
})
mongoose
  .connect(
    process.env.MONGODB_URI
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));