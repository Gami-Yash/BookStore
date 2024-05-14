import React from "react"
import {Route, Routes} from 'react-router-dom';
import Home from './pages/homePage';
import CreateBook from "./pages/createBook";
import EditBook from "./pages/editBook";
import DeleteBook from "./pages/deleteBook";
import ShowBook from "./pages/showBook";

const App = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/detail/:id" element={ <ShowBook/> } />
      <Route path="/books/edit/:id" element={ <EditBook/>} />
      <Route path="/books/delete/:id" element={ <DeleteBook/>} />
    </Routes>
  )
}

export default App