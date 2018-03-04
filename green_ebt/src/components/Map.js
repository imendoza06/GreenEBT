import React from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";

import "../MarketMarker.css";

import MarketMarkerGreen from "./MarketMakerGreen";
import MarketMarkerRed from "./MarketMakerRed";

import MarketInfo from "./MarketInfo";

import appleImageS from "../images/green_apple_small.png";
import appleImageM from "../images/green_apple_medium.png";
import appleImageL from "../images/green_apple_large.png";
import appleImageredS from "../images/red_apple_small.png";
import appleImageredM from "../images/red_apple_medium.png";
import appleImageredL from "../images/red_apple_large.png";


class Map extends React.Component {
  state = {
    mapOptions: defaultOptions,
    markets: [],
    selectedMarketIndex: null
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }


  componentDidMount() {
    axios
      .get(
        "https://data.ny.gov/resource/7jkw-gj56.json?county='Queens'  OR county='Kings' OR county='New York' OR county='Richmond' OR county='Bronx'"
      )
      .then(res => {
        console.log("res.data", res.data);
        this.setState({
          markets: res.data.filter(
            market => market.location && market.location_points.coordinates
          )
        });
      })
      .catch(err => {
        console.log("error fetching markets");
      });
  }

  onMapChange = options => {
    this.setState({
      mapOptions: options
    });
  };

  onMarketClick = i => {
    const markets = this.state.markets;
    this.props.onMarketClick(i);
    this.setState({
      selectedMarketIndex: i,
      mapOptions: {center: {
        lat: markets[i].location_points.coordinates[1],
        lng: markets[i].location_points.coordinates[0]
      },
    zoom: 6}
    });
  };

  render() {
    const { markets, mapOptions, selectedMarketIndex } = this.state;
    const { zoom } = mapOptions;
console.log(mapOptions)
    const imageGreen =
      zoom >= 16 ? appleImageL : zoom >= 13 ? appleImageM : appleImageS;
console.log('imggreen', imageGreen)

const imageRed = 
zoom >= 16 ? appleImageredL : zoom >= 13 ? appleImageredM: appleImageredS;
console.log('imgred', imageRed)


    console.log("this.state.markets", this.state.markets);
    // console.log('this.state.markets[0].location_points', this.state.markets[0].location_points.coordinates)
    console.log('default option FINAL', this.props.defaultOptions)

    return <GoogleMapReact id="map-container" bootstrapURLKeys={{ key: "AIzaSyCQTUR2rqPrkIsOIBh7G_KjKE74P4kcKX0" }}  {...mapOptions}>
        {markets.map((market, i) => (market.snap_status === "Y" ? <div lat={market.location_points.coordinates[1]} lng={market.location_points.coordinates[0]} style={{ width: 30, heigth: 30 }}>
                <MarketMarkerGreen id="market-marker" market={market} imageGreen={imageGreen} selected={market[i] === selectedMarketIndex} onMarketClick={() => this.onMarketClick(i)} key={i} lat={market.location_points.coordinates[1]} lng={market.location_points.coordinates[0]} />
                {i === selectedMarketIndex && <div id="market-info">
                    {MarketInfo(markets[selectedMarketIndex])}
                  </div>}
              </div> : <div lat={market.location_points.coordinates[1]} lng={market.location_points.coordinates[0]} style={{ width: 30, heigth: 30 }}>
                {" "}
                <MarketMarkerRed id="market-marker" market={market} imageRed={imageRed} selected={market[i] === selectedMarketIndex} onMarketClick={() => this.onMarketClick(i)} key={market.unique_key} lat={market.location_points.coordinates[1]} lng={market.location_points.coordinates[0]} />
                {i === selectedMarketIndex && <div id="market-info">
                    {MarketInfo(markets[selectedMarketIndex])}
                  </div>}
              </div>))}
      </GoogleMapReact>;
  }
}

export default Map;
