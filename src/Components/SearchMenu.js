import React, { Component } from 'react'
import TeamResults from '../Components/TeamResults'
import AdvisorResults from '../Components/AdvisorResults'
import jsonData from '../../src/data.json'

export default class SearchMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            advisorSelected: false,
            searchBarContent: "",
            myData: []

        }
        this.handleRadioChange = this.handleRadioChange.bind(this);
    }

    componentWillMount(){
        let data = [];
        console.log(jsonData[0].team.id);

        jsonData.map((element,index) =>{
            data = [...data,element.team];
            if (index === jsonData.length){
                this.setState({myData:data})
            }
        });
    }
    handleRadioChange(event) {
        if (event.target.value == "team") {
            this.setState({ advisorSelected: false })
        } else { this.setState({ advisorSelected: true }) }
        console.log(event.target.value);
    }
    render() {
        const Header = (props) => this.state.advisorSelected ? <AdvisorResults {...props} /> : <TeamResults {...props} />;
        return (
            <div>
                <h2>Trouver un conseiller</h2>
                <div className="searchType">
                    <form>


                        <label>
                            Par équipe
              <input
                                type="radio"
                                name="searchBy"
                                value="team"
                                id="searchByTeam"
                                checked={!this.state.advisorSelected}
                                onChange={this.handleRadioChange} />
                        </label>
                        <label>
                            Par conseiller
              <input
                                type="radio"
                                name="searchBy"
                                value="advisor"
                                id="searchByAdvisor"
                                onChange={this.handleRadioChange}
                                checked={this.state.advisorSelected}
                            />
                        </label>
                    </form>  </div>
                <div className="searchCriteria">
                    <ul>
                        <input type="text" name="Name" id="" />
                        <form>
                            <select name="Région" id=""></select>
                            <select name="Expertise" id=""></select>
                        </form>
                        <button>Reinitialiser</button>
                    </ul>
                </div>
                <Header {...this.state.myData}/>
            </div>

        )
    }
}


