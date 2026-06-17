import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Book from "./pages/Book";
import Stories from "./pages/Stories";
import CreateStory from "./pages/CreateStory";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/book" element={<Book />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/create-story" element={<CreateStory />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;