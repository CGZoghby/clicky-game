import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import HeroUnit from "./components/ClickyJumbotron";
import RendPics from "./components/PictureRender";


class App extends Component {
  render() {
    return (
      <Wrapper>
        <NavBar />
        <HeroUnit />
        <RendPics />
      </Wrapper>
    );
  }
}

export default App;
