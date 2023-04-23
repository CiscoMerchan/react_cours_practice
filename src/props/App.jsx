import React from "react";
//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.



function App() {
    return (
      <div>
        <h1 className="heading">My Contacts</h1>
        <div className="card">
          <div className="top">
            <h2>Beyonce</h2>
            <img
              src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
              alt="avatar_img"
            />
          </div>
          <div className="bottom">
            <p>+123 456 789</p>
            <p>b@beyonce.com</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
  