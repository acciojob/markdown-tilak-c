import React, { useState, useEffect } from "react";
import { marked } from "marked";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("Loading...");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPreview(marked.parse(markdown));
    }, 300);
    return () => clearTimeout(timeout);
  }, [markdown]);

  return (
    <div className="editor-container">
      <div className="input-section">
        <textarea
          className="textarea"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Write your Markdown here..."
        />
      </div>

      <div className="preview-section">
        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: preview }}
        />
      </div>
    </div>
  );
};

export default MarkdownEditor;