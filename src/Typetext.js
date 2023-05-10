import React, { useEffect } from "react";

function TypingEffect() {
  useEffect(() => {
    function typeEffect(words, speed, delay, backspaceDelay, elementId) {
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      const element = document.getElementById(elementId);

      function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
          element.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
          const typingSpeed = backspaceDelay;
          setTimeout(type, typingSpeed);
        } else {
          element.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
          const typingSpeed = charIndex === currentWord.length ? delay : speed;
          setTimeout(type, typingSpeed);
        }

        if (charIndex === currentWord.length) {
          isDeleting = true;
        }

        if (charIndex === 0 && isDeleting) {
          isDeleting = false;
          wordIndex++;
          if (wordIndex === words.length) {
            wordIndex = 0;
          }
        }
      }

      type();
    }

    const words = ["BTB", "BTC", "SASS"];
    const typingSpeed = 150; // Speed in milliseconds for typing a character
    const delay = 2500; // Delay in milliseconds after typing a word
    const backspaceDelay = 100; // Delay in milliseconds before backspacing starts
    const elementId = "typed-text";

    typeEffect(words, typingSpeed, delay, backspaceDelay, elementId);
  }, []);

  return <span id="typed-text"></span>;
}

export default TypingEffect;
