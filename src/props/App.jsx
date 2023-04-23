import React from "react";
import "./app.css"
import Card from "./Card"
import contacts from "./contacts";


//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.

// This function goes in the map fuction that will iterate the contacts object
function createCard(contacts){
    return<Card 
        name={contacts.name}
        img={contacts.imgURL}
        
        phone={contacts.phone}
        email={contacts.email}
           />
} 

function App() {
    
    return (
        
      <div>
        <h1 className="heading">My Contacts</h1>
        {contacts.map(createCard)}
        
      </div>
    );
  }
  
  export default App;
  