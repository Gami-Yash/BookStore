import React from "react"
import {Route, Routes} from 'react-router-dom';
import Home from './pages/homePage';
import createBook from "./pages/createBook";
import editBook from "./pages/editBook";
import deleteBook from "./pages/deleteBook";
import showBook from "./pages/showBook";

const App = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<createBook />} />
      <Route path="/books/detail/id" element={ <showBook/> } />
      <Route path="/books/edit/:id" element={ <editBook/>} />
      <Route path="/books/delete/:id" element={ <deleteBook/>} />
    </Routes>
  )
}

export default App