import React, { Component } from 'react'
import Advisor from '../Components/Advisor'
export default class AdvisorResults extends Component {
  constructor(props) {
    super(props);
    this.state ={
      allAdvisors: this.props.data
    }
  }
  componentWillMount() {
    // let advisors = [];
    // this.props.data.map(element => {
    //   element.members.map(advisor => {
    //     allAdvisors = [...allAdvisors, advisor];
    //   })
      
    // })
    // this.setState({allAdvisors: allAdvisors})
  }
  render() {
  
    return (
      this.state.allAdvisors.map(advisor => 
        <Advisor key={advisor.id} {...advisor}/>
        )
    )
  }
}
