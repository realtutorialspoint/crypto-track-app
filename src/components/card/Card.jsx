import { useEffect, useState } from "react";
import "./card.css";
import axios from "axios";

const Card = () => {
  const [coins, setCoins] = useState([]);

  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      tiers: "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "x-rapidapi-key": "your-api-key-here",
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((res) => setCoins(res.data.data.coins))
      .catch((err) => console.log(err));
  });

  return (
    <>
      {coins.map((coin) => (
        <div className="card" key={coin.uuid}>
          <div className="icon">
            <img src={coin.iconUrl} alt={coin.name} />
          </div>
              <h2>{coin.name}</h2>
              <h3>$ { parseFloat(coin.price).toFixed(2) }</h3>
        </div>
      ))}
    </>
  );
};
export default Card;
