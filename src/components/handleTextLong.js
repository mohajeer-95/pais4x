import React from 'react';

function TextWithNewLines({ text = "", statebuttonText }) {
    var longText = text
    // Replace commas with a comma followed by a space
    const formattedText = longText.replace(/,/g, ', ');

    // Split the text at periods, but avoid splitting at "www." or ".com"
    const sentences = formattedText.split(/(\.{1,3})(?![a-zA-Z])(?<!www)(?<!\.com)/).reduce((acc, curr, idx) => {
        if (curr.match(/\.{1,3}/)) {
            acc[acc.length - 1] += curr;
        } else {
            acc.push(curr.trim());
        }
        return acc;
    }, []);

    return (
        <div>
            {sentences.map((sentence, index) => (
                <p key={index}>
                    {sentence.trim()}
                </p>
            ))}
        </div>
    );
}

export default TextWithNewLines;
