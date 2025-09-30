// components/WordCloudComponent.jsx
import React from 'react';
import WordCloud from 'react-d3-cloud';

// react-d3-cloud uses a function to determine font size.
const fontSizeMapper = (word) => Math.sqrt(word.value) * 5;

// This function determines the rotation of a word.
// It will randomly return either 0 degrees or -90 degrees.
// const rotate = () => (Math.random() > 0.5 ? 0 : -90);
const rotate = () => 0;

export default function WordCloudComponent({ words }) {

   if (!words || !Array.isArray(words) || words.length === 0) {
        return <div>No words to display</div>;
    }

  console.log('Words received by WordCloud:', words); // Debug log
    
  return (
    <div style={{ width: "100%", height: "400px" }}>
        <WordCloud
            data={words}
            width={500}
            height={350}
            font="sans-serif"
            fontSize={fontSizeMapper}
            rotate={rotate}
            padding={2}
        />
    </div>
  );
}