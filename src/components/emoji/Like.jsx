import React, { useState } from "react";
import "./App.css";
function LikeButton() {
   const [likes, setLikes] = useState(false);

   return (
      <button
      className="like-button"
         onClick={() => {
            setLikes ((prevState)=> !prevState)}
         }>
         {likes? "❤️" : "🤍"}
      </button>
   );
}
export default LikeButton;
