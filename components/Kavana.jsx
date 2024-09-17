import React, { useState } from "react";
import "./Kavana.css"; // Import the CSS file for styling

// List of Kannada poems (you can add more poems here)
const poems = [
  {
    id: 1,
    title: "ಪ್ರಕೃತಿ ಸೌಂದರ್ಯ",
    content: `ಪ್ರಕೃತಿ ಅಮ್ಮನ ಸೌಂದರ್ಯ\n
      ಎಷ್ಟೇ ನೋಡಿದರೂ ಕಡಿಮೆ\n
      ಗುಂಗಾದ ಈ ಗಾಳಿಯಲ್ಲಿ\n
      ಎಲ್ಲವೂ ಆಗಿದೆ ಅವಳಿ.`,
  },
  {
    id: 2,
    title: "ಜೀವನದ meaning",
    content: `ಜೀವನವು ಕಡಲಂತೆ
      ಒಂದು ಅಲೆ ಬಂದು ಹೋಗಿ
      ಮತ್ತೊಂದು ಅಲೆ ಬರುತ್ತಲೇ ಇರುತ್ತದೆ
      ಹಾಗೆಯೇ ನಮ್ಮ ಕನಸುಗಳು.`,
  },
  {
    id: 3,
    title: "ಪ್ರೀತಿ",
    content: `ಪ್ರೀತಿಯ ಚುಕ್ಕಿ
      ಮನದ ಗಗನಕೆ
      ಬಂದಾಗವಲ್ಲ ಅರ್ಥವಾಗುತ್ತದೆ
      ಪ್ರೀತಿಯ ಮಹತ್ವ.`,
  },
  {
    id: 4,
    title: "ಬಸಂತ್ ಋತು",
    content: `ಹರಿದ್ವಾರು ನದಿಯಲಿ
      ಒಂದು ನಗು ಬಂದು ತೇಲಿ
      ಸುತ್ತ ಸುತ್ತ ಹರಿಯುತಿಹುದು
      ವಸಂತ ಸಿರಿ.`,
  },
];

function Kavana() {
  const [currentPoemIndex, setCurrentPoemIndex] = useState(0);

  const nextPoem = () => {
    setCurrentPoemIndex((prevIndex) => (prevIndex + 1) % poems.length);
  };

  const previousPoem = () => {
    setCurrentPoemIndex(
      (prevIndex) => (prevIndex - 1 + poems.length) % poems.length
    );
  };

  const currentPoem = poems[currentPoemIndex];

  return (
    <div className="kavana-container">
      <h2 className="kavana-title">ಕವಿತೆಗಳ ಪುಟ</h2>
      <div className="poem-card">
        <h3 className="poem-title">{currentPoem.title}</h3>
        <p className="poem-content">{currentPoem.content}</p>
      </div>

      <div className="poem-navigation">
        <button onClick={previousPoem} className="nav-button">
          ಹಿಂದಿನ ಕವಿತೆ
        </button>
        <button onClick={nextPoem} className="nav-button">
          ಮುಂದಿನ ಕವಿತೆ
        </button>
      </div>
    </div>
  );
}

export default Kavana;
