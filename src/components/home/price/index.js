import axios from "axios";
import React, { useEffect, useState } from "react";
// Slider Styles
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CoinList } from "../../../config/api";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Price = (props) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    pauseOnHover: true,
    cssEase: "linear",
    rtl: true,
  };
  const [coins, setCoins] = useState([]);

  // const { currency, symbol } = CryptoState();
  const currency = "INR";
  const symbol = "₹";

  const fetchCoins = async () => {
    const { data } = await axios.get(CoinList(currency));
    setCoins(data.splice(0, 10));
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  return (
    <Slider {...settings}>
      {coins.map((row) => {
        const profit = row.price_change_percentage_24h > 0;
        return (
          <div className="coin__item">
            <div className="coin__title FirstDayNight">
              {row.name} - {row.symbol.toUpperCase()}
            </div>
            <div className="coin__price SecondDayNight">
              {symbol}
              <span>{numberWithCommas(row.current_price.toFixed(2))}</span>
            </div>
            <div className={`coin__percent ${profit > 0 ? "green" : "red"}`}>
              {profit && "+"}
              {row.price_change_percentage_24h.toFixed(2)}%
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Price;
