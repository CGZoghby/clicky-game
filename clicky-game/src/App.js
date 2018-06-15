import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import HeroUnit from "./components/ClickyJumbotron";
import RendPic from "./components/PictureRender";
import photos from "./pictures.json";

class App extends Component {
  state = {
    photos
  };

  clickPic = (event) => {
    console.log(JSON.stringify(event.children.isclicked));
  }

  render() {
    return (
      <Wrapper>
        <NavBar />
        <HeroUnit />
        <div className="row">
          {this.state.photos.map(photo => (
            <RendPic
              clickPic={this.clickPic}
              key={photo.id}
              id={photo.id}
              alt={photo.alt}
              src={photo.src}
              isclicked={photo.isClicked}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
