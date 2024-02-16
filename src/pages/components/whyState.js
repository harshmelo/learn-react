import React, { useState } from 'react'; // Import useState from react
import { sculptureList } from '../../data/data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0); // Initialize state with useState hook

  function handleClick() {
    // Update the index state, cycling back to 0 if the end of the list is reached
    const nextIndex = (index + 1) % sculptureList.length;
    setIndex(nextIndex);
  }

  // Access the current sculpture based on the updated index state
  const sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.name} // It's better to use sculpture.name if sculpture.alt is not defined in the provided code
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
