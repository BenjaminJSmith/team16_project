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
  }

  leftClick(index, imageArray)
  {
    if(index > 0)
    {
      index--;
    }

    document.getElementById("picture").src = imageArray[index];
    return index;
  }

  rightClick(index, imageArray)
  {
    if(index < 3)
    {
      index++;
    }

    document.getElementById("picture").src = imageArray[index];
    return index;
  }

  render()  //Render function.
  {
    let index = 0;
    //`let` does allow reassignment

    //`const` does not allow reassignment
    const imageArray = ["https://twistedsifter.files.wordpress.com/2012/09/art-deco-mcdonalds-clifton-hill-victoria-australia.jpg","https://www.pymnts.com/wp-content/uploads/2018/07/shutterstock_497368633.jpg","https://www.bunkwings.com/wp-content/uploads/2015/07/bunk-cocktails-and-wings-nottingham172.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/0b/54/56/b7/aldershot-nando-s.jpg"]
    const descriptionArray = ["McDonalds fast food restaurant","Pizza Hut Pizza restaurant","Bunk bar - chicken wings and cocktails", "Nandos peri peri chicken restaurant"]


    return(
      <div id="root" className="About">
        <header className="App-header">
  

        
          <img id="logo" src = "https://www.avas-angels.com/images/HiResLogo.png" alt="Ava's Angels logo"/>
  

          <img id="picture" src= { imageArray[index] } className="picture" alt="Bunk bar" />{document.getElementById("picture")}
  

          <button onClick={this.rightClick.bind(this, index, imageArray)} className="right-button"> > </button>
          <button onClick={this.leftClick.bind(this, index, imageArray)} className="left-button"> &lt; </button>
  
          <p id="text"> restaurant! </p>
  


        </header>
      </div>
    );
  }
}

export default AboutPage;

//http://10.20.30.140:3000/