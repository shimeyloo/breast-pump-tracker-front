import React from "react";

function StatsTable(props) {
  return (
    <div className='graph-container' id=''>
      <div className='container'>
        <table className='table'>
          <tbody>
            <tr>
              <th scope='row'>Daily High</th>
              <td>26 oz</td>
            </tr>
            <tr>
              <th scope='row'> Daily Low</th>
              <td>6 oz</td>
            </tr>
            <tr>
              <th scope='row'> Daily Average</th>
              <td>12.4 oz</td>
            </tr>
            <tr>
              <th scope='row'> Weekly Average</th>
              <td>10.2 oz</td>
            </tr>
            <tr>
              <th scope='row'> Monthly Average</th>
              <td>11.3 oz</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StatsTable;
