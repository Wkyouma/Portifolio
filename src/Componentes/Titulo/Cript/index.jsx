import { useState } from "react";

const Cript = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  
  const encryptText = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) =>
            index < iterations ? char : characters[Math.floor(Math.random() * characters.length)]
          )
          .join("")
      );
      iterations++;
      if (iterations > text.length) clearInterval(interval);
    }, 80);
  };

  return (
    <h2
      className="absolute bottom-0 left-0 mb-4 ml-4 font-mono text-3xl sm:text-4xl text-white z-20 hidden sm:block hover:text-green-400"
      onMouseEnter={encryptText}
    >
      {displayText}
    </h2>
  );
};

export default Cript;
