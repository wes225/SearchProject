import React, { Component } from 'react'
import TeamResults from '../Components/TeamResults'
import AdvisorResults from '../Components/AdvisorResults'

export default class SearchMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamSelected: false,
            searchBarContent: "",
            myData: props

        }
    }
    render() {
        let header = this.state.teamSelected? <TeamResults/> : <AdvisorResults/>
        return (
            <div>
                <h2>Trouver un conseiller</h2>
                <div className="searchType">
                    <form>


                    <label>
              Par équipe
              <input type="radio" name="searchBy" value="team" id="searchByTeam" checked={true} />
            </label>
            <label>
              Par conseiller
              <input
                type="radio"
                name="searchBy"
                value="advisor"
                id="searchByAdvisor"
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
                <div>
                    {header}
                </div>
            </div>

        )
    }
}
