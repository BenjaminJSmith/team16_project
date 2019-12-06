import React from 'react';
import './App.css';

//PROTOTYPE:
//Have 3 or 4 JSON with information about restaurants / facilities
// - Pictures (1 or 2)
// - Name
// - Pricing (Cheap/medium/expensive)
// - Discount available? (Y/N)
// - Distance (walking time)
// - Location (Address)
//Make the react app which can read these JSON and display them in a SPA
// - Arrows to switch between restaurants
//   - Smooth transitions - slides across
// - Formats page so they have consistent styling
// Don't merge this into master!
// - Perhaps make a "prototypes" branch which we can push to.

class AboutPage extends React.Component
{
  //Array constructor - I found this code online. It uses... magic.
  constructor(props)
  {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() //Handles button clicks - sets new picture src. and alts.
  {
    document.getElementById("picture").src = "https://media-cdn.tripadvisor.com/media/photo-s/0b/54/56/b7/aldershot-nando-s.jpg";
    document.getElementById("picture").alt = "Nandos Peri Peri Chicken restaurant";
  }

  render()  //Render function.
  {
    return(
      <div id="root" className="About">
  
        <header className="App-header">
  
          <img id="logo" src = "https://www.avas-angels.com/images/HiResLogo.png" alt="Ava's Angels logo"/>
  
          <img id="picture" src="https://www.bunkwings.com/wp-content/uploads/2015/07/bunk-cocktails-and-wings-nottingham172.jpg" className="picture" alt="Bunk bar" />{document.getElementById("picture")}
  
          <button onClick={this.handleClick} className="right-button"> > </button>
          <button onClick={this.handleClick} className="left-button"> &lt; </button>
  
          <p id="text"> restaurant! </p>
  
        </header>
  
      </div>
    );
  }
}

export default AboutPage;

//http://10.20.30.140:3000/
