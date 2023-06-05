	import { render } from "react-dom";
	import Emoji from './components/emoji/index'
	import React, { useState } from 'react';
	import data from "./data/profile.json";

	const styles = {
	  fontFamily: "sans-serif",
	  textAlign: "center"
	};

	
function App() {
  const [emojiData, setEmojiData] = useState([]);

  useEffect(() => {
    setEmojiData(data);
  }, []);

  const handleAddEmoji = (newEmoji) => {
    setEmojiData([...emojiData, newEmoji]);
  };

  return (
    <div>
      <Emoji data={emojiData} onAddEmoji={handleAddEmoji} />
    </div>
  );
}


	render(<App />, document.getElementById("root"));
