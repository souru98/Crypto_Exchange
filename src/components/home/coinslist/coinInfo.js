import { CircularProgress, Container } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { HistoricalChart } from "../../../config/api";
import { chartDays } from "../../../config/data";
import SelectButton from "./SelectButton";
// import { CryptoState } from "../CryptoContext";

const CoinInfo = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  // const { currency } = CryptoState();
  const [flag, setflag] = useState(false);
  const currency = "INR";

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    console.log(data.prices);
    setflag(true);
    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  return (
    <Container
      style={{
        textAlign: "center",
        paddingLeft: "0px",
        paddingRight: "0px",
        boxShadow: "none",
      }}
      className="Background"
    >
      {!historicData | (flag === false) ? (
        <CircularProgress style={{ color: "gold" }} size={250} thickness={1} />
      ) : (
        <>
          <span>Chart will come here</span>
          {/* <Line
            data={{
              labels: historicData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: historicData.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in ${currency}`,
                  borderColor: "#EEBC1D",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          /> */}
          {/* <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {chartDays.map((day) => (
              <SelectButton
                key={day.value}
                onClick={() => {
                  setDays(day.value);
                  setflag(false);
                }}
                selected={day.value === days}
              >
                {day.label}
              </SelectButton>
            ))}
          </div> */}
        </>
      )}
    </Container>
  );
};

export default CoinInfo;
