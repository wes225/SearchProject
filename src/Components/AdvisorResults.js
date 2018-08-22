import React, { Component } from 'react'
import Advisor from '../Components/Advisor'
export default class AdvisorResults extends Component {
  constructor(props) {
    super(props);
    this.state ={
      allAdvisors: []
    }
  }
  componentWillMount() {
    let allAdvisors = [];
    this.props.data.map(element => {
      element.members.map(advisor => {
        allAdvisors = [...allAdvisors, advisor];
      })
      
    })
    this.setState({allAdvisors: allAdvisors})
  }
  render() {
    console.log(this.state.allAdvisors[0])
    


    return (
      this.state.allAdvisors.map(advisor => 
        <Advisor key={advisor.id} {...advisor}/>
        )
    )
  }
}
