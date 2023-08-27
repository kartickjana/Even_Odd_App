// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrementNumber = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const numType = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="heading">Count {count}</h1>
          <p className="numberType">Count is {numType}</p>
          <button
            className="btn"
            type="button"
            onClick={this.onIncrementNumber}
          >
            Increment
          </button>
          <p className="paragraoh">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
