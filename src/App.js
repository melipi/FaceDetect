import React, { Component } from 'react';
import './App.css';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Footer from './components/Footer/Footer';

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
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
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries, 
      joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box });
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => { 
      this.setState({imageUrl: this.state.input})
    fetch('https://polar-springs-85501.herokuapp.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response && this.state.imageUrl) {
        fetch('https://polar-springs-85501.herokuapp.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
      .then (response => response.json())
      .then(count => {
        const user = { ...this.state.user, entries: count }
        this.setState({ user: user })
      })
      .catch(console.log) //error handling for the fetch statement
      }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch (err => console.log(err));
  }

  onRouteChange = (route) => {
    (route === 'signout') 
      ? this.setState(initialState)
      : ((route === 'home') 
        ? this.setState({isSignedIn:true})
        : this.setState({isSignedIn: false}))
    this.setState({route: route});
  }

  render() {
  const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className='tc vh-100'>
        <Navigation 
        isSignedIn={isSignedIn} 
        onRouteChange = {this.onRouteChange} />
        { route === 'home' 
          ? <div>
            <Rank 
            name={this.state.user.name} 
            entries={this.state.user.entries} />
            <FaceRecognition 
              box={box} 
              imageUrl={imageUrl} />
            <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit} />
            <Footer />
          </div>
          : (
            route === 'signin'
            ? <SignIn 
                loadUser={this.loadUser} 
                onRouteChange={this.onRouteChange} />
            : (
              route === 'signout'
              ? <SignIn 
                loadUser={this.loadUser} 
                onRouteChange={this.onRouteChange} />
              : <Register 
                loadUser={this.loadUser} 
                onRouteChange={this.onRouteChange} />
            ) 
          )
        }
        </div>
    );
  }
}

export default App;