import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import Sidebar from './Sidebar';
import Preview from './Preview';

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    setPreview(marked(markdown));
  }, [markdown]);

  const handleSave = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'markdown.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLoad = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMarkdown(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="container">
      <Sidebar
        onSave={handleSave}
        onLoad={() => document.getElementById('fileInput').click()}
      />
      <input
        id="fileInput"
        type="file"
        accept=".md"
        style={{ display: 'none' }}
        onChange={handleLoad}
      />
      <div className="editor-container">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Введите Markdown здесь..."
        />
        <Preview content={preview} />
      </div>
    </div>
  );
}

export default MarkdownEditor;
