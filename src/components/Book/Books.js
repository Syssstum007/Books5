import React,{ useEffect, useState } from 'react';
import Book from "./Book";
import "./Book.css";
import axios from "axios";
import { BASE_URL } from '../../url.js';


const fetchHandler = async () => {
    return await axios.get(`${BASE_URL}/books`).then((res) => res.data);
  };
const Books=()=>{
   
        const [books, setBooks] = useState([]);
        useEffect(() => {
          fetchHandler().then((data) => setBooks(data.books));
        }, []);
        console.log(books);
    return <div>
        <ul>
        {books && books.length > 0 ? (
          books.map((book, i) => (
            <li  key={i}>
              <Book book={book} />
            </li>
          ))):(
            <p>No books found</p>
          )}
      </ul>
    </div>;
};

export default Books;