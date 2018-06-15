import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import HeroUnit from "./components/ClickyJumbotron";
import RendPic from "./components/PictureRender";
import photos from "./pictures.json"
import $ from "jquery"

class App extends Component {
  state = {
    photos
  };

  clickPic = () => {
    // Set this.state.friends equal to the new friends array
    $.attr('data-isClicked').value() = true;
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
            id={photo.id}
            alt={photo.alt}
            src={photo.src}
            isClicked={photo.isClicked}
          />
        ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
