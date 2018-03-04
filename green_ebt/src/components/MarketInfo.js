import React from "react";

const MarketInfo = market => {
  const address = `${market.location}, ${market.city} ${market.state} ${
    market.zip
  }`;
  return (
    <div>
      <h3>{market.market_name}</h3>
      Address: {address} <br />
      Operation Hours: {market.operation_hours}
      <br />
      Operation Season: {market.operation_season}
      <br />
      EBT/SNAP: {market.snap_status === "Y" ? "Yes" : "No"}
      <br />
          { market.market_link ? (
      <p>
        Additional Information:{" "}
        <a target="_blank" href={market.market_link}>
          {market.market_link}
        </a> 
      </p>) : null}
    </div>
  );
};

export default MarketInfo;
