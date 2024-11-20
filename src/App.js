import React, { useState, useEffect } from 'react';
import './App.css';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import NoteSearch from './components/NoteSearch';
import EditNote from './components/EditNote';
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);

  // Load notes from localStorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) setNotes(storedNotes);
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (updatedNote) => {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
    setSelectedNote(null);
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <Banner />
      <h1 className="title">My Notes</h1>
      <NoteSearch setSearchQuery={setSearchQuery} />
      <AddNote addNote={addNote} />
      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
        setSelectedNote={setSelectedNote}
      />
      {selectedNote && <EditNote note={selectedNote} editNote={editNote} />}
      <Footer />
    </div>
  );
}

export default App;
