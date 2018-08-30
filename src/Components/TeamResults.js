import React, { Component } from 'react'
import Team from '../Components/Team'
export default class TeamResults extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allTeams: this.props.data
    }
  }
  render() {
    return ((this.state.allTeams) ? this.state.allTeams.map(team =>
      <Team key={team.id} {...team} />
    )
      : <h3>No Team found</h3>)

  }
}
