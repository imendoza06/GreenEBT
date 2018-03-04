import React from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";

import "../MarketMarker.css";

import MarketMarkerGreen from "./MarketMakerGreen";
import MarketMarkerRed from "./MarketMakerRed";

import appleImageS from "../images/green_apple_small.png";
import appleImageM from "../images/green_apple_medium.png";
import appleImageL from "../images/green_apple_large.png";
import appleImageredS from "../images/red_apple_small.png";
import appleImageredM from "../images/red_apple_medium.png";
import appleImageredL from "../images/red_apple_large.png";


class Map extends React.Component {
  constructor(props) {
    super(props) 
    // this.defaultOptions = { 
    //   defaultCenter: { lat: 40.7128, lng: -73.9 },
    //   defaultZoom: 11
    // }
    this.state = {
      mapOptions: this.props.defaultOptions,
      markets: [],
      selectedMarketID: null
    };
  }


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

  onMarketClick = market => {
    this.props.onMarketClick(market);
    this.setState({ selectedMarketID: market.unique_key });
  };

  render(props) {
    const { markets, mapOptions, selectedMarketID } = this.state;
    const { zoom } = mapOptions;

    console.log('selectedborough props', this.props.selectedBorough)
    // console.log('default options', this.defaultOptions)


    
    console.log('MAP default options', this.props.defaultoptions)

    const imageGreen =
      zoom >= 16 ? appleImageL : zoom >= 13 ? appleImageM : appleImageS;
console.log('imggreen', imageGreen)

const imageRed = 
zoom >= 16 ? appleImageredL : zoom >= 13 ? appleImageredM: appleImageredS;
console.log('imgred', imageRed)


    console.log("this.state.markets", this.state.markets);
    // console.log('this.state.markets[0].location_points', this.state.markets[0].location_points.coordinates)
    console.log('default option FINAL', this.props.defaultOptions)

    return (    
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCQTUR2rqPrkIsOIBh7G_KjKE74P4kcKX0"
        }}
        onChange={this.onMapChange}
        {...this.props.defaultOptions}
        {...mapOptions}
      >
        {markets.map(market => ( market.snap_status === "Y" ? 
          <MarketMarkerGreen
            market={market}
            imageGreen={imageGreen}
            selected={market.unique_key === selectedMarketID}
            onMarketClick={() => this.onMarketClick(market)}
            key={market.unique_key}
            lat={market.location_points.coordinates[1]}
            lng={market.location_points.coordinates[0]}
          /> :           <MarketMarkerRed
          market={market}
          imageRed={imageRed}
          selected={market.unique_key === selectedMarketID}
          onMarketClick={() => this.onMarketClick(market)}
          key={market.unique_key}
          lat={market.location_points.coordinates[1]}
          lng={market.location_points.coordinates[0]}
        /> 
        ))}
      </GoogleMapReact>    
    );
  }
}

export default Map;
