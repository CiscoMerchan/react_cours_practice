import React from "react";

function DictEmoji(props){
    return<div className="term">
    <dt>
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {props.img}
      </span>
      <span>{props.title}</span>
    </dt>
    <dd>
      {props.text}
    </dd>
  </div>
}
export default DictEmoji;