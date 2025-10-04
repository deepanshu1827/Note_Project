import React, { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import MainPage from "./Components/MainPage";
import CreateGroupModal from "./Components/CreateGroupModal";
import NotesPage from "./Components/NotePage";
import "./App.css";

function App() {
  const [groups, setGroups] = useState(() => {
    const saved = localStorage.getItem("groups");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  const handleAddGroup = (newGroup) => {
    setGroups([...groups, { ...newGroup, notes: [] }]);
  };

  const handleAddNote = (groupName, note) => {
    const timestamp = new Date().toLocaleString();
    const updatedGroups = groups.map((g) =>
      g.name === groupName
        ? { ...g, notes: [...g.notes, { text: note, time: timestamp }] }
        : g
    );
    setGroups(updatedGroups);
  };

  return (
    <div className="app-container">
      <Sidebar
        groups={groups}
        onSelectGroup={setSelectedGroup}
        onAddGroup={() => setShowModal(true)}
        selectedGroup={selectedGroup}
      />
      <div className="main-content">
        {!selectedGroup ? (
          <MainPage />
        ) : (
          <NotesPage
            group={selectedGroup}
            groups={groups}
            onAddNote={handleAddNote}
          />
        )}
      </div>
      {showModal && (
        <CreateGroupModal
          onClose={() => setShowModal(false)}
          onCreate={handleAddGroup}
        />
      )}
    </div>
  );
}

export default App;
