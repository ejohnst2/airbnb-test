import React from 'react';
import Flat from './components/flat'
import GoogleMapReact from 'google-map-react'
import Marker from './components/marker'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    }
    this.handleClick = this.handleClick.bind(this)
  };
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          flats: data
        })
      })
  }
  handleClick() {
    console.log("this was clicked")
  }
  render() {
    let center = {
      lat: 48.8566, lng: 2.3522
    };

    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input type="text" placeholder="search a flat" />
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat key={flat.id} flat={flat} onClick={this.handleClick} />
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact zoom={14} center={center} >
          {this.state.flats.map((flat) => {
            return <Marker {...flat} />
          })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
