import React, {useState, useEffect} from "react";
import "./App.css";
import AddBook from "./components/add-book";
import Books from "./components/books";
import axios from "axios";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

function App() {
  const  [books, setBooks] = useState([]);

  const [book, setBook] = useState({
    bookName:"",
    author:"",
    quantity:"",
    department:"",
    comment:"",
  })

  useEffect(() => {
      fetch('/books').then(res => {
          if(res.ok){
              return res.json()
          }
      }).then(jsonRes => setBooks(jsonRes))
  })


  const handleChange = (e) =>{
    const {name, value} = e.target;
    setBook(prevInput=>{
        return(
            {
                ...prevInput,
                [name]: value
            }
        )
    })
  }

  const addBookFunc = (e) =>{
    e.preventDefault();
    const newBook = {
        bookName: book.bookName,
        author: book.author,
        quantity: book.quantity,
        department: book.department,
        comment: book.comment,
    } 
    axios.post('/newbook', newBook);
    alert(`The book ${book.bookName} is added`)
    setBook({bookName:"", author:"", quantity:"", department:"", comment:""})
  }

  const deleteBook = (id) => {
    axios.delete('/delete/'+id);
    alert(`The book wiht ${id} is deleted`);
  }

  const lendBook = (id) => {
    axios.put('/lend/'+id);
    alert(`The book wiht ${id} is lended`);
  }

  const backBook = (id) => {
    axios.put('/back/'+id);
    alert(`The book wiht ${id} is back`);
  }

    return (
        <div classNameName="App">
            <BrowserRouter>
            <nav
                className="navbar navbar-expand-lg bg-body-tertiary"
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>
                        RGB-BOOKS
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/">
                                    Books
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addbook">
                                    Add Book
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Departments
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            History & Criticism
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Religious
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Music
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            Study & Teaching
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route exact path="/" element = {
                    <Books books={books}  lendBook={lendBook} backBook={backBook} deleteBook = {deleteBook} />
                } />
                    
                <Route path="/addbook" element = {
                     <AddBook book={book} handleChange = {handleChange} addBookFunc={addBookFunc} />
                } />
                   
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
