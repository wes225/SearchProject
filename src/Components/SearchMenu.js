import React, { Component } from 'react'

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
        return (
            <div>
                <h2>Trouver un conseiller</h2>
                <div className="searchType">
                    <ul>
                        <input type="checkbox" name="Par Equipe" id="searchByTeam" />
                        <input type="checkbox" name="Par conseiller" id="searchByAdvisor" /></ul>
                </div>
                <div className="searchCriteria">
                    <ul>
                        <input type="text" name="Name" id="" />
                        <select name="Région" id=""></select>
                        <select name="Expertuse" id=""></select>
                        <button></button>
                    </ul>
                </div>
            </div>
        )
    }
}
