import React from 'react';

function NoteSearch({ setSearchQuery }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search Notes..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default NoteSearch;
