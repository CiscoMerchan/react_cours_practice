import React from "react";
import  "./app.css"
import DictEmoji from "./DictEmoji";
import emojipedia from "./emojipedia.js"




function setEmoji(emojipedia){
    return <DictEmoji
    key = {emojipedia.id}
    img = {emojipedia.emoji}
    title = {emojipedia.name}
    text = {emojipedia.meaning}
     />
}

function App() {
  
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
     {emojipedia.map(setEmoji)}
       
      </dl>
    </div>
  );
}

export default App;
