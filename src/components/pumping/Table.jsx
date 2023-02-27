import React, { useState, useEffect } from "react";
import axios from "axios";

import AddPumpingSession from "./AddPumpingSession";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function Table(props) {
  const [pumpingLog, setPumpingLog] = useState([]);

  useEffect(() => {
    axios
      .get(props.serverURL)
      .then((res) => {
        // Sort res.data
        res.data.sort((a, b) => {
          const dateA = new Date(a.dateTime);
          const dateB = new Date(b.dateTime);
          return dateB.getTime() - dateA.getTime();
        });

        setPumpingLog(res.data);
      })
      .catch((error) => console.log(error));
  }, [props.serverURL]);

  return (
    <div>
      <AddPumpingSession
        serverURL={props.serverURL}
        pumpingLog={pumpingLog}
        setPumpingLog={setPumpingLog}
      />
      <div className='table-container'>
        <table className='table table-striped'>
          <TableHeader />
          <TableBody
            serverURL={props.serverURL}
            pumpingLog={pumpingLog}
            setPumpingLog={setPumpingLog}
          />
        </table>
      </div>
    </div>
  );
}

export default Table;
