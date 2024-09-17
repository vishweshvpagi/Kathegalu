import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Story from "./components/Story";
import Kavana from "./components/Kavana";
import BookReviews from "./components/BookReviews";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/story">Story</a>
          </li>
          <li>
            <a href="/kavana">Kavana</a>
          </li>
          <li>
            <a href="/book-reviews">Book Reviews</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/kavana" element={<Kavana />} />
        <Route path="/book-reviews" element={<BookReviews />} />
      </Routes>
    </Router>
  );
}

export default App;
