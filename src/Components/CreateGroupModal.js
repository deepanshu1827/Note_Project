import React, { useState } from "react";

function CreateGroupModal({ onClose, onCreate }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#3498db");

  const handleSubmit = () => {
    if (name.trim() === "") return;
    onCreate({ name, color });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Create New Group</h3>
        <input
          type="text"
          placeholder="Enter group name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Choose Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default CreateGroupModal;
