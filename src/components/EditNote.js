import React, { useState } from 'react';

function EditNote({ note, editNote }) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [tags, setTags] = useState(note.tags.join(', '));
  const [priority, setPriority] = useState(note.priority);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedNote = { 
      ...note, 
      title, 
      content, 
      tags: tags.split(',').map(tag => tag.trim()), 
      priority,
      updatedAt: new Date().toLocaleString(), // Update timestamp on edit
    };
    editNote(updatedNote);
  };

  return (
    <div className="note-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Edit your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <button onClick={handleSubmit}>Save Changes</button>
    </div>
  );
}

export default EditNote;
