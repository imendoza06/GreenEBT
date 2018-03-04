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
    return (
      <div>
        
        <SelectBorough />
        <div id="map-container">
          <Map onMarketClick={this.onMarketClick} />
        </div>
      </div>
    );
  }
}

export default MapAndBoro;
