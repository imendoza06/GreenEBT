import React from "react";
// import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";

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
    };
  }

 

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
    const {  boroughs } = this.state;
    const { selectedBorough, markets } = this.props; 
    console.log('default option FINAL', this.props.defaultOptions)
    console.log(this.state);
    return (
      <div>
        <select value={this.props.selectedBorough} onChange={this.props.handleSelect}>
          {boroughs.map((borough, index) => (
            <option
              disabled={index === 0}
              selected={index === 0}
              value={borough.value}
            >
              {borough.name}
            </option>
          ))}
        </select>
        <div>{this.props.getMarketDetail()}</div>
      </div>
    );
  }
}

export default SelectBorough;
