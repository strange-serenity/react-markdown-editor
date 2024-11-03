import React from 'react';

function Preview({ content }) {
  return (
    <div
      className="preview"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
}

export default Preview;
