import React from 'react';
import Flat from './components/flat'
import GoogleMapReact from 'google-map-react'
import Marker from './components/marker'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      selectedFlat: null,
      search: "",
      allFlats: []
    }
  };
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          flats: data,
          allFlats: data
        })
      })
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    })
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name))
    })
  }

  render() {
    let center = {
      lat: 48.8566, lng: 2.3522
    };

    if (this.state.selectedFlat) {
      center = {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      }
    }

    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input type="text" placeholder="search a flat" onChange={this.handleSearch} value={this.state.search} />
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat key={flat.id} flat={flat} selectFlat={this.selectFlat} />
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact zoom={14} center={center} >
          {this.state.flats.map((flat) => {
            return <Marker key={flat.id} {...flat} selected={flat === this.state.selectedFlat}/>
          })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
