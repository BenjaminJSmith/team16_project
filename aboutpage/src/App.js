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

var thePic = <img id="picture" src="https://www.bunkwings.com/wp-content/uploads/2015/07/bunk-cocktails-and-wings-nottingham172.jpg" className="picture"/>;

function setPicture(val)
{
  thePic = <img id="picture" src={val} className="picture"/>;
}

function App()
{  
  return(
    <div id="root" className="About">

      <header className="App-header">

        <img id="logo" src = "https://www.avas-angels.com/images/HiResLogo.png" />

        {thePic}

        <button class="right-button" onclick={setPicture("https://media-cdn.tripadvisor.com/media/photo-s/0b/54/56/b7/aldershot-nando-s.jpg")}> > </button>
        <button class="left-button" onclick={setPicture("https://media-cdn.tripadvisor.com/media/photo-s/0b/54/56/b7/aldershot-nando-s.jpg")}> &lt; </button>

        <p> Edit <code> src/App.js </code> and save to reload. </p>

      </header>

    </div>
  );
}

export default App;

//http://10.20.30.140:3000/