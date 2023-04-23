import React from "react";
import "./app.css"
import Info from "./Info";
function Card(props){
    return <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img"
          src={props.img}
          alt="avatar_img"
        />
      </div>
      <div className="bottom">
     <Info info ={props.phone} />
     <Info info ={props.email} />
     </div>   
    </div>
  
}

export default Card;