import React, { useState } from 'react';
import './Story.css'; // Import the CSS file for styling

// Mock data for a Kannada story
const story = {
  title: "ಜೀವನದ ಸಾಹಸ",
  author: "ರಾಜೇಶ್ ಕುಮಾರ್",
  coverImage: "https://via.placeholder.com/300x400", // Replace with an actual cover image URL
  description: "ಜೀವನದ ಉತ್ಸಾಹ, ಸ್ನೇಹ, ಹಾಗೂ ಬದುಕಿನ ಕುರಿತು ಒಂದು ಅಧ್ಭುತ ಕಥೆ.",
  genre: "ಸಾಹಸ",
  tags: ["ಸಾಹಸ", "ಆತ್ಮಸಾಕ್ಷಾತ್ಕಾರ", "ಸ್ನೇಹ"],
  chapters: [
    {
      number: 1,
      title: "ಅಧ್ಯಾಯ ೧: ಪ್ರಾರಂಭ",
      content: `ಒಮ್ಮೆ ಒಬ್ಬ ಹುಡುಗ, ತನ್ನ ಜೀವನದ ಉತ್ಸಾಹವನ್ನು ಹುಡುಕಲು ಹತ್ತಿರದ ಹಳ್ಳಿಯಿಂದ ದೊಡ್ಡ ಕಾಡಿಗೆ ಹೊರಟನು. ಈ ಪಯಣ ಅವನಿಗೆ ಹೊಸ ಜಗತ್ತು ಪರಿಚಯಿಸಿತು...`,
    },
    {
      number: 2,
      title: "ಅಧ್ಯಾಯ ೨: ಕಾಡಿನಲ್ಲಿನ ಜೀವನ",
      content: `ಕಾಡಿನಲ್ಲಿ ಸುಳಿವಿನ ಸವಾಲುಗಳು ಎದುರಾಗಿದ್ದರೂ, ಹುಡುಗನ ದೃಢತೆ ಅವನನ್ನು ಮುಂದೆ ಕರೆದೊಯ್ಯಿತು. ಅವನು ಪ್ರತಿಯೊಂದು ಪಯಣವನ್ನು ಜಯಿಸುತ್ತಿದ್ದನು...`,
    },
    // Add more chapters as needed
  ],
};

function Story() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

  const nextChapter = () => {
    if (currentChapterIndex < story.chapters.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
    }
  };

  const previousChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
    }
  };

  const currentChapter = story.chapters[currentChapterIndex];

  return (
    <div className="story-container">
      {/* Story Header */}
      <div className="story-header">
        <img src={story.coverImage} alt={story.title} className="story-cover" />
        <div className="story-info">
          <h1 className="story-title">{story.title}</h1>
          <p className="story-author">ಲೇಖಕ: {story.author}</p>
          <p className="story-genre">ಪ್ರಕಾರ: {story.genre}</p>
          <p className="story-description">{story.description}</p>
          <div className="story-tags">
            {story.tags.map((tag, index) => (
              <span key={index} className="story-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="story-content">
        <h2>{currentChapter.title}</h2>
        <p>{currentChapter.content}</p>

        {/* Chapter Navigation */}
        <div className="chapter-navigation">
          <button onClick={previousChapter} disabled={currentChapterIndex === 0}>
            ಹಿಂದಿನ ಅಧ್ಯಾಯ
          </button>
          <button onClick={nextChapter} disabled={currentChapterIndex === story.chapters.length - 1}>
            ಮುಂದಿನ ಅಧ್ಯಾಯ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Story;
