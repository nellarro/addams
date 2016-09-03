import React, { Component } from 'react'
import '../styles/screen.sass'
import Card from '../components/Card.js'

const SHOW_CARD = 2000

class App extends Component {

  constructor () {
    super()
    this.state = {
      cards: [
        'Jake',
        'Princess Bubbelgum',
        'Finn',
        'BMO',
        'Ice King',
        'Jake',
        'Princess Bubbelgum',
        'Finn',
        'BMO',
        'Ice King'
      ],
      matched: [],
      turned: [],
      win: false
    }
  }

  flipCard = (index) => {
    const { turned, cards } = this.state
    if (turned.length < 2) {
      this.setState({
        turned: turned.concat(index)
      }, () => {
        if (this.state.turned.length === 2) {
          if (cards[this.state.turned[0]] === cards[this.state.turned[1]]) {
            this.setState({
              matched: this.state.matched.concat(...this.state.turned),
              turned: []
            }, () => {
              if (this.state.matched.length === cards.length) {
                setTimeout(() => {
                  this.setState({ win: true })
                }, SHOW_CARD / 2)
              }
            })
          } else {
            setTimeout(() => {
              this.setState({ turned: [] })
            }, SHOW_CARD)
          }
        }
      })
    }
  }

  render () {
    if (!this.state.win) {
      const cards = this.state.cards.map((card, index) => {
        const up = (this.state.turned + this.state.matched).includes(index)
        return <Card flipCard={this.flipCard} value={card} up={up} index={index} key={index} />
      })
      return <div>
        <h1>Family Friendly Memory</h1>
        <main>
          {cards}
        </main>
      </div>
    } else {
      return <div>
        <h1> YOU WIN!!! </h1>
      </div>
    }
  }
}

export default App
