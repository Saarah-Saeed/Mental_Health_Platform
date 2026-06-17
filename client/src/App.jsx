import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Book from "./pages/Book";
import Stories from "./pages/Stories";
import CreateStory from "./pages/CreateStory";
import Navbar from "./components/Navbar";

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
      </Routes>
    </>
  );
}

export default App;