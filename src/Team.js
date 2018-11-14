import React, { Component } from 'react'
import { inlineArrayTransformer } from 'common-tags'

class Team extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: props.initialScore,
      teamName: props.teamName
    }
  }

  updateTeamName = event => {
    this.setState({
      teamName: event.target.value
    })
  }

  addOneToScore = () => {
    this.setState({
      score: this.state.score + 1
    })
  }

  subtractOneFromScore = () => {
    this.setState({
      score: this.state.score - 1
    })
  }

  render() {
    return (
      <section>
        <h2 className="name">{this.state.teamName}</h2>
        <p>{this.state.score}</p>
        <ul>
          <li>
            <label>Update Team 1 Name</label>
            <input
              type="text"
              value={this.state.teamName}
              onChange={this.updateTeamName}
            />
            <button>Update</button>
          </li>
          <li>
            <label>Update Team 1 Score</label>
            <button onClick={this.addOneToScore}>Add 1</button>
            <button onClick={this.subtractOneFromScore}>Subtract 1</button>
          </li>
        </ul>
      </section>
    )
  }
}

export default Team
