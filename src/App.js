/*global swal*/

import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import Button from "./Button";
import ReactPlayer from 'react-player'


/* Return a random number between 0 included and x excluded */
function getRandomNumber(x) {
  return Math.floor(Math.random() * x);
}


const TRACKS = [
  "https://soundcloud.com/user-362770434/audio0-2",
  "https://soundcloud.com/user-362770434/audio1",
  "https://soundcloud.com/user-362770434/audio2-1",
  "https://soundcloud.com/user-362770434/audio3-1",
  "https://soundcloud.com/user-362770434/audio4-1"
];

const N_TRACKS = TRACKS.length;

const AudioGuide = ({url, playing}) => (
  <ReactPlayer
              url={url}
              pip={false}
              height={0}
              loop={true}
              width={0}
              playing={playing}
  />
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      play: [false,false],
    };
  }

  togglePlay = (i) => {
    var playBools = new Array(N_TRACKS).fill(false);
    playBools[i] = !this.state.play[i];
    this.setState({ play: playBools });
  };

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <p className="App-logo" >H </p>
          </header>
          <div>
          {   TRACKS.map((url, index) => <AudioGuide url={url} playing={this.state.play[index]} />)}
          </div>
          <div className="App-player">
          {
            TRACKS.map((url,index) =>
              <button className="App-audioguide-sample" onClick={()=>this.togglePlay(index)}>
                 {index}
               </button>
            )}
          </div>
        </div>
      );
  }
}

export default App;
