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
    super(props);   //Something to do with the inheriting class
    this.index = 0; //Indexing the arrays
    this.imageArray = ["https://i1.wp.com/metro.co.uk/wp-content/uploads/2018/11/sei_40316346-18d6.jpg?quality=90&strip=all&zoom=1&resize=644%2C338&ssl=1",
                        "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/8AE4B71E-CF04-90FD-DD137DB719719A39.jpg",
                        "https://yt3.ggpht.com/a/AGF-l7_Za0X5HMZgKBV4-ZSbk8JhrnhJTMWljgfjcg=s900-c-k-c0xffffffff-no-rj-mo",
                        "data:image/png;base64,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"]

    this.descriptionArray = ["Charity 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ligula vel augue blandit mollis nec a sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec vestibulum congue eros euismod scelerisque. Vestibulum.",
                        "Charity 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor diam sapien, in vestibulum diam accumsan pretium. Proin tincidunt justo ac quam tristique tempus. Sed quis dui blandit, ultricies metus in, ullamcorper ipsum. Sed placerat, lorem eu iaculis.",
                        "Charity 3, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus ornare congue. Donec eleifend, mauris at suscipit finibus, tortor tortor finibus lectus, quis luctus sapien augue sit amet nisi. Morbi et quam leo. Suspendisse aliquam mauris tincidunt, pulvinar.",
                        "Charity 4, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed risus malesuada, porttitor dolor cursus, accumsan ipsum. Nunc rutrum nec tortor sed eleifend. Nullam auctor metus leo, id sollicitudin odio dapibus eu. Nullam porttitor tellus et tellus cursus."];
    this.state = { text: this.descriptionArray[this.index] }
  }
  
  leftClick = () => 
  {
    if(this.index > 0)
    {
      this.index--;
    }
    else
    {
      this.index = 3;
    }
    
    this.setState({ text: this.descriptionArray[this.index] });
    document.getElementById("picture").src = this.imageArray[this.index];
  }
  
  rightClick = () =>
  {
    if(this.index < 3)
    {
      this.index++;
    }
    else
    {
      this.index = 0;
    }
    
    this.setState({ text: this.descriptionArray[this.index] });
    document.getElementById("picture").src = this.imageArray[this.index];
  }
  
  render()  //Render function.
  {
    return(
      
      
      <div id="root" className="About">
        <header className="App-header">
        
        
        
          <img id="logo" src = "https://www.avas-angels.com/images/HiResLogo.png" className="logo" alt="Ava's Angels logo"/>
        
          <img id="picture" src= { this.imageArray[this.index] } className="picture" alt="Bunk bar" />
        
        
          <button onClick= { this.rightClick } className="right-button"> >   </button>
          <button onClick= { this.leftClick  } className="left-button"> &lt; </button>
        
          <p> {this.state.text} </p>
        
        
        
        </header>
      </div>
    );
  }
}

//.bind(this)

export default AboutPage;

//http://10.20.30.140:3000/