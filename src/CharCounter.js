import React, { useState } from 'react';

function CharCounter() {
  const [textInput, setTextInput] = useState("");
  const [charResults, setCharResults] = useState([]);

  const calculateCharCount = () => {
    const processedText = textInput.replace(/\s+/g, '').toUpperCase();
    const charFrequency = {};
    const uniqueChars = [];

    for (let char of processedText) {
      if (!charFrequency[char]) {
        charFrequency[char] = 1;
      } else {
        charFrequency[char] += 1;
      }
    }

    for (let char of processedText) {
      if (!uniqueChars.some(item => item.character === char)) {
        uniqueChars.push({ character: char, frequency: charFrequency[char] });
      }
    }

    setCharResults(uniqueChars);
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your text"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      /> <br />
      <button onClick={calculateCharCount}>Count Characters</button>

      <div>
        <h2>Results:</h2>
        {charResults.length > 0 ? (
          charResults.map((item, index) => (
            <div key={index}>
              {item.character} - {item.frequency}
            </div>
          ))
        ) : (
          <div>No characters counted yet.</div>
        )}
      </div>
    </div>
  );
}

export default CharCounter;
