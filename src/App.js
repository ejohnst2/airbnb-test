import React from 'react';
import Flat from './components/flat'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    }
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
  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input type="text" placeholder="search a flat" />
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat key={flat.id} flat={flat} />
            })}
          </div>
        </div>
        <div className="map">
        </div>
      </div>
    );
  }
}

export default App;
