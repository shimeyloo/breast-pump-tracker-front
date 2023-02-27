import React from "react";

function StatsTableTwo(props) {
  return (
    <div className='graph-container' id=''>
      <div className='container'>
        <table className='table'>
          <tbody>
            <tr>
              <th scope='row'>Morning Average</th>
              <td>18.1 oz</td>
            </tr>
            <tr>
              <th scope='row'>Afternoon Average</th>
              <td>12.6 oz</td>
            </tr>
            <tr>
              <th scope='row'>Evening Average</th>
              <td>11.4 oz</td>
            </tr>
            <tr>
              <th scope='row'>Left Average</th>
              <td>6.2 oz</td>
            </tr>
            <tr>
              <th scope='row'> Right Average</th>
              <td>8.3 oz</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StatsTableTwo;
