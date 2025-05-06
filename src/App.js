import React, { useState } from "react";
import QuoteBox from "./components/QuoteBox";
import quotes from "./data/quotes"; // تأكد من المسار الصحيح

export default function App() {
  const [index, setIndex] = useState(0);

  const changeQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setIndex(random);
  };

  const { text, author } = quotes[index];
  const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${text}" - ${author}`
  )}`;

  return (
    <QuoteBox 
      change={changeQuote} 
      txt={text} 
      auth={author} 
      twitterURL={twitterURL}
    />
  );
}
