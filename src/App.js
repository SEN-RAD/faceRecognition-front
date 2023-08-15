import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import InputForm from './Components/InputForm/InputForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Rank from './Components/Rank/Rank';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import './App.css';


const USER_ID = 'sen_rad';
const PAT = '1f85bce118fa43a9a9fb18ba0e0dae94';
const APP_ID = 'my-first-application';
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5';
const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'SignIn',
  isSignedin: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }

}
class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  calculateFaceLocation = (data) => {
    const clariFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clariFace.left_col * width,
      topRow: clariFace.top_row * height,
      rightCol: width - (clariFace.right_col * width),
      bottomRow: height - (clariFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value }); {/*here event.target.value is so that we see the actual info put in the input. This thing here is the functionality of the Input component*/ }
  };

  onButtonSubmit = () => {
    {/*This is the functionality of the DETECT button. They are both passed as props to InputForm*/ }
    this.setState({ imageUrl: this.state.input })
    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": this.state.input,
            }
          }
        }
      ]
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
      },
      body: raw
    };

    fetch("https://api.clarifai.com/v2/models/face-detection/versions/fe995da8cb73490f8556416ecf25cea3/outputs", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          fetch('https://facerecognitionapi-production.up.railway.app/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch((error) => console.log('error', error));
  };

  onRouteChange = (route) => {
    if (route === 'signout' || route === 'SignIn') {
      this.setState({ initialState })
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <ParticlesBg color='#FFFFFF' num={150} type="cobweb" bg={true} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === 'home'
          ? <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries} />
            <InputForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
          : (
            route === 'SignIn'
          )
            ? <SignIn
              onRouteChange={this.onRouteChange}
              loadUser={this.loadUser}
            />
            : <Register
              onRouteChange={this.onRouteChange}
              loadUser={this.loadUser}
            />
        }


      </div>
    );
  }
}

export default App;
