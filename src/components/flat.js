import React from 'react';
import './flat.css'

class Flat extends React.Component {
  handleClick = () => {
    console.log(this)
    this.props.selectFlat(this.props.flat)
  }
  render() {
    const style = {
      backgroundImage: `url(${this.props.flat.imageUrl})`
    }
    const title = `${this.props.flat.price} - ${this.props.flat.name}`

    return (
      <div className="flat">
        <div className="flat-picture" style={style} onClick={this.handleClick} ></div>
        <div className="flat-name">{title}</div>
      </div>
     )
  }
}

export default Flat;
