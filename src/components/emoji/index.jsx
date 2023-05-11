import React from 'react'
import LikeButton from './Like';
import './styles.css'


const Emoji = (props) => {
  return (
    <div>
        <h1>Emojipedia</h1>
        <div className="emoji-list">
          {
            props.data.map (content =>(
              <div className="list">
                <dt><LikeButton/></dt>
                <dt><span className="emoji"> {content.emoji}</span></dt>
                <dt><span className="name">{content.name}</span></dt>
                <dt><span className="meaning">{content.meaning}</span></dt>
              </div>
            ))
          }
        </div>
    </div>
  );
}

export default Emoji;
