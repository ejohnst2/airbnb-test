import React from 'react';
import ReactDOM from 'react-dom';
import './hello.css'

class Hello extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}

export default Hello;
