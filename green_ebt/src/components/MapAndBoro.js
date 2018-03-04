import React from "react";
import axios from "axios";
import Map from "./Map";
import SelectBorough from "./SelectBorough";
import MarketInfo from "./MarketInfo.js";

class MapAndBoro extends React.Component {
  state = {
    selectedMarket: null
  };

  onMarketClick = market => {
    this.setState({ selectedMarket: market });
  };

  render() {
    console.log('default option FINAL', this.props.defaultOptions)
    return (
      <div>
        <SelectBorough markets={this.props.markets} getMarketDetail={this.props.getMarketDetail} selectedBorough={this.props.selectedBorough} defaultOptions={this.props.defaultOptions} handleSelect={this.props.handleSelect}/>
        <div id="map-container">
          <Map selectedBorough={this.props.selectedBorough} defaultOptions={this.props.defaultOptions} onMarketClick={this.onMarketClick} />
        </div>
      </div>
    );
  }
}

export default MapAndBoro;
