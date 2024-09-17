import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Optional CSS file for styling

// Mock data for preview stories (featured/new stories)
const previewStories = [
  {
    id: 1,
    title: "ಜೀವನದ ಸಾಹಸ",
    author: "ರಾಜೇಶ್ ಕುಮಾರ್",
    coverImage: "https://via.placeholder.com/150x200",
  },
  {
    id: 2,
    title: "ಅನ್ವೇಷಣೆಯ ಪಥ",
    author: "ಸ್ಮಿತಾ ಪಾಟೀಲ್",
    coverImage: "https://via.placeholder.com/150x200",
  },
  {
    id: 3,
    title: "ಸ್ಪರ್ಶದ ರೇಖೆ",
    author: "ನಂದನ ಪುರಿ",
    coverImage: "https://via.placeholder.com/150x200",
  },
];

function Home() {
  return (
    <div className="home-container">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h2>Welcome to the Story Library</h2>
        <p>
          Discover a world of stories in various genres and languages. Enjoy
          Kannada literature, adventure, and much more. Dive into stories that
          captivate your imagination and take you on incredible journeys.
        </p>
        <Link to="/books" className="view-all-button">
          View All Stories
        </Link>
      </section>

      {/* Preview of Featured Stories */}
      <section className="preview-section">
        <h3>Featured Stories</h3>
        <div className="preview-grid">
          {previewStories.map((story) => (
            <div key={story.id} className="preview-card">
              <Link to={`/story/${story.id}`}>
                <img
                  src={story.coverImage}
                  alt={story.title}
                  className="preview-cover"
                />
                <h4 className="preview-title">{story.title}</h4>
                <p className="preview-author">By {story.author}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
