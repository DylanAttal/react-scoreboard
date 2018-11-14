import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Team from './Team'

class App extends Component {
  render() {
    let teams = [
      {
        teamName: 'SDG All Stars',
        initialScore: 0
      },
      {
        teamName: 'Cohort XII',
        initialScore: 0
      }
    ]
    return (
      <div>
        <h1>My Scoreboard</h1>
        <main>
          {teams.map((team, index) => (
            <Team
              key={index}
              teamName={team.teamName}
              initialScore={team.initialScore}
            />
          ))}
        </main>
      </div>
    )
  }
}

export default App
