import React, { Component } from "react";
import TeamResults from "../Components/TeamResults";
import AdvisorResults from "../Components/AdvisorResults";

import "../Components/SearchMenu.css";

let jsonData = [{
    "team": {
      "id": "001",
      "name": "Green Team",
      "teamLink": "",
      "region": "Montreal",
      "members": [{
          "isLead": true,
          "id": 101,
          "name": "John Smith",
          "title": "Frontend developer",
          "email": "test@testing.com",
          "phoneNumber": "555-555-5555",
          "linkedin": "www.linkedin.com",
          "region": "Montreal",
          "expertise": ["React", "Angular"]
        },
        {
          "isLead": false,
          "id": 102,
          "name": "Alex Smith",
          "title": "Backend Developer",
          "email": "test@testing.com",
          "phoneNumber": "555-555-5555",
          "linkedin": "www.linkedin.com",
          "region": "Montreal",
          "expertise": ["NodeJS", "php"]
        }, {
          "isLead": false,
          "id": 103,
          "name": "Morgan Smith",
          "title": "Fullstack Developer",
          "email": "test@testing.com",
          "phoneNumber": "555-555-5555",
          "linkedin": "www.linkedin.com",
          "region": "Longueil",
          "expertise": ["React", "NodeJS"]
        }
      ]
    }
  },
  {
    "team": {
      "id": "002",
      "name": "Blue Team",
      "teamLink": "",
      "region": "Lasalle",
      "members": [{
        "isLead": true,
        "id": 104,
        "name": "Michael Smith",
        "title": "Mobile Developer",
        "email": "test@testing.com",
        "phoneNumber": "555-555-5555",
        "linkedin": "www.linkedin.com",
        "region": "Lasalle",
        "expertise": ["Swift"]
      }]
    }
  },
  {
    "team": {
      "id": "003",
      "name": "Red team",
      "teamLink": "",
      "region": "Levis",
      "members": [{
        "isLead": true,
        "id": 105,
        "name": "Mathew Smith",
        "title": "QA Developer",
        "email": "test@testing.com",
        "phoneNumber": "555-555-5555",
        "linkedin": "www.linkedin.com",
        "region": "Levis",
        "expertise": ["Selenium"]
      }]
    }
  }
]
export default class SearchMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advisorSelected: true,
      searchBarContent: "",
      myData: [],
      mySearchResults: []
    };
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.getAdvisorsFromData = this.getAdvisorsFromData.bind(this);
    this.getTeamsFromData = this.getTeamsFromData.bind(this);
  }

  componentWillMount() {
    let data = [];
    jsonData.map((element, index) => {
      data = [...data, element.team];
      if (index === jsonData.length - 1) {
        this.setState(
          { myData: data },
          () =>
            this.state.advisorSelected
              ? this.setState({
                  mySearchResults: this.getAdvisorsFromData(this.state.myData)
                })
              : this.setState({
                  mySearchResults: this.getTeamsFromData(this.state.myData)
                })
        );
      }
    });
  }

  getTeamsFromData(data) {
    let allTeams = [];
    data.map(team => {
      allTeams = [...allTeams, team];
    });
    return allTeams;
  }
  getAdvisorsFromData(allTeams) {
    let allAdvisors = [];
    allTeams.map(element => {
      element.members.map(member => {
        allAdvisors = [...allAdvisors, member];
      });
    });
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
      });
    } else {
      this.state.myData.map(team => {
        team.members.map(member => {
          if (member.name.toLowerCase().includes(searchText.toLowerCase())) {
            if (member.isLead) {
              searchResult = [...searchResult, team];
            }
          }
        });
      });
    }
    this.setState({
      mySearchResults: searchResult
    });
  }
  handleRadioChange(event) {
    if (event.target.value == "team") {
      this.setState({
        advisorSelected: false,
        mySearchResults: this.getTeamsFromData(this.state.myData)
      });
    } else {
      this.setState({
        advisorSelected: true,
        mySearchResults: this.getAdvisorsFromData(this.state.myData)
      });
    }
  }
  render() {
    const Header = props =>
      this.state.advisorSelected ? (
        <AdvisorResults {...props} />
      ) : (
        <TeamResults {...props} />
      );
    return (
      <div>
        <div className="header">
          <h2 className="title">Trouver un conseiller</h2>
          <div className="searchType checkboxForm">
            <form>
              <label>
                Par équipe
                <input
                  type="radio"
                  name="searchBy"
                  value="team"
                  id="searchByTeam"
                  checked={!this.state.advisorSelected}
                  onChange={this.handleRadioChange}
                />
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
            </form>{" "}
          </div>
          <div className="searchCriteria">
            <input
              type="text"
              name="Name"
              id=""
              onChange={this.handleSearchTextChange}
            />
            <form className="dropdownOptions">
              <select name="Région" id="">
                <option value="qc">Quebec</option>
              </select>
              <select name="Expertise" id="">
                <option value="javascript">Javascript</option>
              </select>
            </form>
            <button>Reinitialiser</button>
          </div>
        </div>
        <Header data={this.state.mySearchResults} />
      </div>
    );
  }
}
