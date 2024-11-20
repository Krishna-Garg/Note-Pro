import React from 'react';

function Note({ note, deleteNote, setSelectedNote }) {
  const priorityClass = note.priority ? note.priority : 'low';

  return (
    <div className={`note ${priorityClass}`}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <div className="tags">
        {note.tags.map((tag, idx) => (
          <span key={idx} className="tag">{tag}</span>
        ))}
      </div>
      
      <div className="actions">
        <button onClick={() => setSelectedNote(note)}>Edit</button>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
      </div>

      {/* Displaying date-time */}
      <div className="date-time">
        <small>
          {note.updatedAt 
            ? `Last edited: ${note.updatedAt}` 
            : `Created on: ${note.createdAt}`}
        </small>
      </div>
    </div>
  );
}

export default Note;
