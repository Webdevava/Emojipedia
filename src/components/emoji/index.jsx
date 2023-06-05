import React, { useState } from 'react';
import LikeButton from './Like';
import './styles.css';

const Emoji = (props) => {
  const [newEmoji, setNewEmoji] = useState({ name: '', description: '', emoji: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.onAddEmoji(newEmoji);
    setNewEmoji({ name: '', description: '', emoji: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmoji({ ...newEmoji, [name]: value });
  };

  return (
    <div>
      <h1>Emojipedia</h1>
          <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="emoji"
          placeholder="Emoji"
          value={newEmoji.emoji}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newEmoji.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newEmoji.description}
          onChange={handleInputChange}
        />
        <button type="submit">Add Emoji</button>
      </form>
      <div className="emoji-list">
        {props.data.map((content, index) => (
          <div className="list" key={index}>
            <dt><LikeButton /></dt>
            <dd><span className="emoji">{content.emoji}</span></dd>
            <dd><span className="name">{content.name}</span></dd>
            <dd><span className="meaning">{content.meaning}</span></dd>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Emoji;
