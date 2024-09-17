import React, { useState, useEffect } from "react";
import "./BookReviews.css"; // Import the CSS file

const mockBookReviews = [
  {
    id: 1,
    title: "Book One",
    cover: "https://via.placeholder.com/150",
    review: "This is the review for Book One.",
  },
  {
    id: 2,
    title: "Book Two",
    cover: "https://via.placeholder.com/150",
    review: "This is the review for Book Two.",
  },
  {
    id: 3,
    title: "Book Three",
    cover: "https://via.placeholder.com/150",
    review: "This is the review for Book Three.",
  },
  {
    id: 4,
    title: "Book Four",
    cover: "https://via.placeholder.com/150",
    review: "This is the review for Book Four.",
  },
  {
    id: 5,
    title: "Book Five",
    cover: "https://via.placeholder.com/150",
    review: "This is the review for Book Five.",
  },
  {
    id: 6,
    title: "Book Six",
    cover: "https://via.placeholder.com/150",
    review: "This is the review for Book Six.",
  },
  // Add more book data here
];

function BookReviews() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  // Simulate fetching book reviews from API
  useEffect(() => {
    setBooks(mockBookReviews);
  }, []);

  // Handle book click to open modal or show review
  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  // Handle closing the modal
  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <h2>Book Reviews Page</h2>
      <p>Click on a book cover to read the review.</p>

      {/* Book covers grid */}
      <div className="grid">
        {books.map((book) => (
          <div
            key={book.id}
            className="book-item"
            onClick={() => handleBookClick(book)}
          >
            <img src={book.cover} alt={book.title} className="cover-image" />
            <h4>{book.title}</h4>
          </div>
        ))}
      </div>

      {/* Modal for showing selected book review */}
      {selectedBook && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{selectedBook.title}</h3>
            <p>{selectedBook.review}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookReviews;
