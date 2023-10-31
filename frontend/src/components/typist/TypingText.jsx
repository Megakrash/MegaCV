// import React, { useState, useEffect } from "react";

// function TypingText({ text, delay, startDelay }) {
//   const [currentText, setCurrentText] = useState("");

//   useEffect(() => {
//     const timerId = setTimeout(() => {
//       const typeTimerId = setInterval(() => {
//         setCurrentText((value) =>
//           value.length < text.length ? text.slice(0, value.length + 1) : value
//         );
//       }, delay);

//       return () => clearInterval(typeTimerId);
//     }, startDelay);

//     return () => clearTimeout(timerId);
//   }, [text, delay, startDelay]);

//   return <p>{currentText}</p>;
// }

// export default TypingText;
