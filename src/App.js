import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./pages/Book";
import Addreview from "./pages/Addreview";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import Signup from "./pages/Signup";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/book/:id" element={<Book />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
        <Route path="/addreview/:id" element={<Addreview />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
