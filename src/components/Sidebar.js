import React from 'react';

function Sidebar({ onSave, onLoad }) {
  return (
    <nav className="sidebar">
      <button onClick={onSave}>💾 Сохранить</button>
      <button onClick={onLoad}>📂 Загрузить</button>
    </nav>
  );
}

export default Sidebar;
