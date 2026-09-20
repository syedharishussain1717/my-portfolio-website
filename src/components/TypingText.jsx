import { useState, useEffect } from "react";

function TypingText() {
  const words = [
    "Computer Science Enthusiast ",
    "Web Developer ",
    "Software Project Builder ",
    "Technology Explorer ",
    "Always Learning, Always Building "
  ];

  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer;

    if (!isDeleting && displayText.length < currentWord.length) {
      // Typing
      timer = setTimeout(() => {
        setDisplayText(
          currentWord.substring(0, displayText.length + 1)
        );
      }, 100);
    }

    else if (!isDeleting && displayText.length === currentWord.length) {
      // Pause after typing
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    }

    else if (isDeleting && displayText.length > 0) {
      // Deleting
      timer = setTimeout(() => {
        setDisplayText(
          currentWord.substring(0, displayText.length - 1)
        );
      }, 60);
    }

    else if (isDeleting && displayText.length === 0) {
      // Move to next word
      setIsDeleting(false);
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    return () => clearTimeout(timer);

  }, [displayText, isDeleting, wordIndex]);

  return (
    <div className="typing-box">
      <span id="typing-text">{displayText}</span>
      <span className="typing-cursor">|</span>
    </div>
  );
}

export default TypingText;