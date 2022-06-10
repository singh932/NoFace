import React, { Component } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Clarifai from "clarifai";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";

window.process = {
  ...window.process,
};

const app = new Clarifai.App({
  apiKey: "4558654d0fc64b7499eaf0c94d8f1032",
});

const particlesInit = async (main) => await loadFull(main);
const particlesLoaded = (container) => "";

const particlesOptions = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      value: 50,
      density: {
        enable: true,
        area: 800,
      },
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  // Method 1: Using older way of fetching data from Clarifai API
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict("a403429f2ddf4b49b307e318f00e528b", this.state.input)
      .then(
        function (response) {
          console.log(
            response.outputs[0].data.regions[0].region_info.bounding_box
          );
        },
        function (err) {}
      );
  };

  // Method 1: Using newer way of fetching data from Clarifai API
  // onButtonSubmit = () => {
  // const raw = JSON.stringify({
  //   user_app_id: {
  //     user_id: "ukurv5kcd7h0",
  //     app_id: "249915634c2847c4af05788ea2c968fa",
  //   },
  //   inputs: [
  //     {
  //       data: {
  //         image: {
  //           url: this.state.input,
  //         },
  //       },
  //     },
  //   ],
  // });

  // const requestOptions = {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     Authorization: "Key 9b0cb5f74e254a26afa248f216ec57df",
  //   },
  //   body: raw,
  // };

  // fetch(
  //   "https://api.clarifai.com/v2/models/a403429f2ddf4b49b307e318f00e528b/outputs",
  //   requestOptions
  // )
  //   .then((response) => console.log(response))
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error ", error));
  // };

  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
