import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import HeroUnit from "./components/ClickyJumbotron";
import RendPic from "./components/PictureRender";
import photos from "./pictures.json";
import setClickStatus from "./components/ClickLogic";

const ClickyStatusPictures = setClickStatus(RendPic);

class App extends Component {
  state = {
    photos,
    score: 0,
    hiScore: 0
  };

  shufflePhotos = (array) => {
    let currentIndex, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    for (currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * (currentIndex + 1));
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  componentDidMount = () => {
    this.setState(this.shufflePhotos(photos));
  }

  onClick = e => {
    console.log(e.target.children().getAttribute("id"))
    if(photos[0].isClicked) {
      this.setState({score: 0});
    } else {
      this.setState({score: this.state.score+1})
      if (this.state.score >= this.state.hiScore) {
        this.setState({hiScore: this.state.score})
      }
    }
    this.setState(this.shufflePhotos(photos));
    console.log(this.state[0])
  }

  render() {
    return (
      <Wrapper>
        <NavBar 
        score={this.state.score}
        hiScore={this.state.hiScore}
        />
        <HeroUnit />
        <span onClick={() => this.onClick()}>
          <div className="row">
            {this.state.photos.map(photo => (
              <ClickyStatusPictures
                onClick={() => this.onClick()}
                key={photo.id}
                id={photo.id}
                alt={photo.alt}
                src={photo.src}
                score={this.state.score}
                hiScore={this.state.hiScore}
              />
            ))}
          </div>
        </span>
      </Wrapper>
    );
  }
}

export default App;
