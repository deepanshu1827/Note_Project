import React from "react";

function Sidebar({ groups, onSelectGroup, onAddGroup, selectedGroup }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Pocket Notes</h2>
      </div>
      <ul className="group-list">
        {groups.map((g, i) => (
          <li
            key={i}
            className={`group-item ${
              selectedGroup?.name === g.name ? "active" : ""
            }`}
            onClick={() => onSelectGroup(g)}
          >
            <div
              className="group-circle"
              style={{ backgroundColor: g.color }}
            >
              {g.name.charAt(0).toUpperCase()}
            </div>
            <span>{g.name}</span>
          </li>
        ))}
      </ul>
      <button className="add-btn" onClick={onAddGroup}>
        +
      </button>
    </div>
  );
}

export default Sidebar;
