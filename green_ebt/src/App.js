import { Link, Switch, Route } from "react-router-dom";
import About from "./components/About";
import SelectBorough from "./components/SelectBorough";
import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Map from "./components/Map.js";
import MarketInfo from "./components/MarketInfo.js";
import MapAndBoro from "./components/MapAndBoro.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedBorough: "",
      markets: [], 
      defaultOptions: { 
        defaultCenter: { lat: 40.7128, lng: -73.9 },
        defaultZoom: 11
      }
    };
  }

  handleSelect = (e) => {
    const { selectedBorough, defaultOptions } = this.state

    const targetVal = e.target.value

    if (targetVal === 'Richmond'){ 
      this.setState({
        selectedBorough: targetVal, 
        defaultOptions: {defaultCenter: { lat: 40.57953, lng: -74.15020 },
        defaultZoom: 12
      }});
    }
      else if (targetVal === 'Queens'){ 
        this.setState({
          selectedBorough: targetVal, 
          defaultOptions: {  defaultCenter: { lat: 40.68149, lng: -73.83652 },
          defaultZoom: 11.6
        }});
      } 
      else if (targetVal === 'New York'){ 
        this.setState({
          selectedBorough: targetVal, 
          defaultOptions: {    defaultCenter: { lat: 40.77306, lng: -73.97125 },
          defaultZoom: 12
        }});
      } 
      else if (targetVal === 'Bronx'){ 
        this.setState({
          selectedBorough: targetVal, 
          defaultOptions:  { defaultCenter: { lat: 40.84985, lng: -73.86641 },
          defaultZoom: 12
        }});
      } 
      else if (targetVal === 'Kings'){ 
        this.setState({
          selectedBorough: targetVal, 
          defaultOptions:  { defaultCenter: {lat: 40.6482, lng: -73.9442 },
            defaultZoom: 12
        }});
      } 

    console.log("targetVal", targetVal);
    axios
      .get(
        `https://data.ny.gov/resource/7jkw-gj56.json?county=${e.target.value}&$order=market_name ASC`
      )
      .then(res => {
        console.log("response", res);
        this.setState({
          markets: res.data
        });
      });
      console.log('selected broro FINAL', selectedBorough)
      console.log('default option FINAL', defaultOptions)
      console.log('selectedborough', selectedBorough)
  };


  getMarketDetail = () => {
    return this.state.markets.map(market => {
      return (
        <div>
          <li>
            <p> Name: {market.market_name} </p>
            <p> Location: {market.location} </p>
            <p>Operation Season: {market.operation_season} </p>
            <p>Hours: {market.operation_hours} </p>
            <p><a href={market.market_link}>{market.market_link}</a></p>
            <p>Accepts EBT: {market.snap_status} </p>
            <p>Phone Number: {market.phone} </p>
          </li>
        </div>
      );
    });
  };

  renderMapAndBoro = () => { 
    return(
      <MapAndBoro getMarketDetail={this.getMarketDetail} markets={this.state.markets} selectedBorough={this.state.selectedBorough} defaultOptions={this.state.defaultOptions} handleSelect={this.handleSelect}/>
    )
  }

  

  render() {
    return (
      <div>
        <nav>
          <Link to="/">Map</Link> {"  "}
          <Link to="/about">About Us</Link>
        </nav>
        <Switch>
          <Route exact path="/" render={this.renderMapAndBoro} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
