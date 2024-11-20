import React from 'react';
import Note from './Note';

function NoteList({ notes, deleteNote, setSelectedNote }) {
  return (
    <div className="note-list">
      {notes.map(note => (
        <Note
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          setSelectedNote={setSelectedNote}
        />
      ))}
    </div>
  );
}

export default NoteList;
