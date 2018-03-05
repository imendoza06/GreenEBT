import React from "react";
// import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import '../App.css'


class SelectBorough extends React.Component {
  constructor() {
    super();
    this.state = {
      boroughs: [
        {
          name: "Select borough",
          value: ""
        },
        {
          name: "Bronx",
          value: "Bronx"
        },
        {
          name: "Brooklyn",
          value: "Kings"
        },
        {
          name: "Queens",
          value: "Queens"
        },
        {
          name: "Manhattan",
          value: "New York"
        },
        {
          name: "Staten Island",
          value: "Richmond"
        }
      ],
      selectedBorough: "",
      markets: []
    };
  }

  getMarketDetail = () => {
    return this.props.markets.map(market => {
      return (
        <div >
          <li className='borderbottom'>
            <p> Name: {market.market_name} </p>
            <p> Location: {market.location} </p>
            <p>Operation Season: {market.operation_season} </p>
            <p>Hours: {market.operation_hours} </p>
            <p><a href={market.market_link}>{market.market_link}</a></p>
            <p>Accepts EBT: {market.snap_status} </p>
            <p>Phone Number: {market.phone} </p>
            <hr className='borderbottom' />
          </li>
        </div>
      );
    });
  };

  //hardcoded
  getMarketDetail2 = () => {
    return (
      <div>
        <li>
          <p>Name: Corona Green Market</p>
          <p>Location: Roosevelt Ave. btwn 103rd and 104th Sts</p>
          <p>Operation Season: July 7 - November 17</p>
          <p>Hours: Friday 8am-3pm</p>
          <p>Link: www.grownyc.org/greenmarket</p>
          <p>Accepts EBT: "Y"</p>
          <p>Phone Number: (212) 788-7900</p>
        
          </li>
        </div>
    )
  }

  render() {
    
    return (
      <div>
        <div className='borough'>
        
        <select value={this.props.selectedBorough} onChange={this.props.handleSelect}>
          {this.state.boroughs.map((borough, index) => (
            <option
              disabled={index === 0}
              selected={index === 0}
              value={borough.value}

            >
              {borough.name}
            </option>
          ))}
        </select>
        <div>{this.getMarketDetail()}</div>
        <h2>Welcome to GreenEBT</h2>
        <p>Please Select a Borough</p>
        </div>
      </div>
    );
  }
}

export default SelectBorough;
