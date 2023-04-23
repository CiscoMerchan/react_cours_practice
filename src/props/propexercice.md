import React from "react";
import ReactDOM from "react-dom";

<!-- Create a Card function that will be the componet that will serve as base to render the data.
select the props.name (the na of the props have to be the same in the component and and in the component function)  -->
function Card(props){
  return <div>
  <h2>{props.title}</h2>
  <img
    src={props.img}
    alt="avatar_img"
  />
  <p>{props.phone}</p>
  <p>{props.email}</p>
  </div>
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <!-- Each Card component have the props and the correspondant value the wants to be render on it -->
    <Card  
    title="Beyonce"
    img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    phone="+123 456 789"
    email="b@beyonce.com"
    />  
    <Card 
    title="Jack Bauer"
    img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    phone="+987 654 321"
    email="jack@nowhere.com"
     />
    <Card 
      title="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      phone="+918 372 574"
      email="gmail@chucknorris.com"
    />

  </div>,
  document.getElementById("root")
);