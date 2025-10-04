import React, { useState } from "react";

function NotesPage({ group, groups, onAddNote }) {
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    if (note.trim() !== "") {
      onAddNote(group.name, note);
      setNote("");
    }
  };

  const currentGroup = groups.find((g) => g.name === group.name);

  return (
    <div className="notes-page">
      <div className="notes-header" style={{ backgroundColor: group.color }}>
        <h2>{group.name}</h2>
      </div>
      <div className="notes-list">
        {currentGroup?.notes.map((n, i) => (
          <div key={i} className="note-item">
            <p>{n.text}</p>
            <span className="note-time">{n.time}</span>
          </div>
        ))}
      </div>
      <div className="notes-input">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Type your note..."
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
}

export default NotesPage;
