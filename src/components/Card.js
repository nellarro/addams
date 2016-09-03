import React from 'react'

class Card extends React.Component {
  handleClick = () => {
    this.props.flipCard(this.props.index)
  }

  render () {
    const direction = this.props.up ? 'up' : 'down'
    return <div onClick={this.handleClick} className={`card ${direction}`}>{this.props.value}</div>
    switch (direction) {
      case 'down': return <img src='..images/dead-roses.jpg' />
    }
  }
}

export default Card
