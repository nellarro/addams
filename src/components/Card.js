import React from 'react'

class Card extends React.Component {
  handleClick = () => {
    this.props.flipCard(this.props.index)
  }

  render () {
    const direction = this.props.up ? 'up' : 'down'
    switch (direction) {
      case 'up': return <img src={this.props.value} className={`card ${direction}`} />
      case 'down': return <img src='https://s-media-cache-ak0.pinimg.com/236x/9a/3a/e2/9a3ae2e10d5b196b0a228ca00f8219fc.jpg' onClick={this.handleClick} className={`card ${direction}`} />
      default: return <img src='https://s-media-cache-ak0.pinimg.com/236x/9a/3a/e2/9a3ae2e10d5b196b0a228ca00f8219fc.jpg' onClick={this.handleClick} className={`card ${direction}`} />
    }
  }
}

export default Card
