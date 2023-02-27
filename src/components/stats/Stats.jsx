import React, { useState, useEffect } from "react";
import axios from "axios";
import LineGraph from "./LineGraph";
import PieGraph from "./PieGraph";
import BarGraph from "./BarGraph";
import StatsTable from "./StatsTable";
import StatsTableTwo from "./StatsTableTwo";

function Stats() {
  const [pumpingLog, setPumpingLog] = useState([]);

  useEffect(() => {
    axios
      .get("https://breast-pump-tracker-378404.wl.r.appspot.com")
      .then((res) => {
        // Sort res.data
        res.data.sort((a, b) => {
          const dateA = new Date(a.dateTime);
          const dateB = new Date(b.dateTime);
          return dateA.getTime() - dateB.getTime();
        });

        setPumpingLog(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='container'>
      <LineGraph pumpingLog={pumpingLog} />
      <StatsTable pumpingLog={pumpingLog} />
      <StatsTableTwo pumpingLog={pumpingLog} />
      <PieGraph pumpingLog={pumpingLog} />
      <BarGraph pumpingLog={pumpingLog} />
    </div>
  );
}

export default Stats;
