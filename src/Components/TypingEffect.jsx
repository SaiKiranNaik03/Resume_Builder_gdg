import { useState, useEffect } from "react";

const TypingEffect = ({ words = [], speed = 300, fontSize = "24px" }) => {
  const [displayWords, setDisplayWords] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!Array.isArray(words) || words.length === 0) return;

    if (index < words.length) {
      const timeout = setTimeout(() => {
        setDisplayWords((prev) => [...prev, words[index]]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, words, speed]);

  return (
    <div style={{ fontSize, fontWeight: "bold" }}>
      {displayWords.map((word, i) => (
        <span key={i} style={{ color: word.color, marginRight: "5px" }}>
          {word.text}
        </span>
      ))}
    </div>
  );
};

export default TypingEffect;
