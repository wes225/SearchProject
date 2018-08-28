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
            myData: [],
            mySearchResults: []

        }
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.getAdvisorsFromData = this.getAdvisorsFromData.bind(this);
    }

    componentWillMount() {
        let data = [];
        jsonData.map((element, index) => {
            data = [...data, element.team];
            if (index === (jsonData.length - 1)) {
                this.setState({ myData: data }, () =>
                    this.setState({ mySearchResults: this.getAdvisorsFromData(this.state.myData) }))
            }
        });
    }

    getAdvisorsFromData(allTeams) {
        let allAdvisors = [];
        allTeams.map(element => {
            element.members.map(member => {
                allAdvisors = [...allAdvisors, member];
            })
        })
        return allAdvisors;
    }
    handleSearchTextChange(event) {
        let searchText = event.target.value;
        let searchResult = [];

        if (this.state.advisorSelected) {
            this.getAdvisorsFromData(this.state.myData).map(member => {
                if (member.name.toLowerCase().includes(searchText.toLowerCase())) {
                    searchResult = [...searchResult, member];
                }
            })
        }
        this.setState({
            mySearchResults: searchResult
        })
    }
    handleRadioChange(event) {
        if (event.target.value == "team") {
            this.setState({ advisorSelected: false })
        } else { this.setState({ advisorSelected: true }) }
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
                        <input type="text" name="Name" id="" onChange={this.handleSearchTextChange} />
                        <form>
                            <select name="Région" id=""></select>
                            <select name="Expertise" id=""></select>
                        </form>
                        <button>Reinitialiser</button>
                    </ul>
                </div>
                <Header data={this.state.mySearchResults} />
            </div>

        )
    }
}


