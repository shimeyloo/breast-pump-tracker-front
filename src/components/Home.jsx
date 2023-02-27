import React from "react";
import welcome from "../images/welcome.mp4";

function Home() {
  return (
    <div>
      <video
        className='welcome-container'
        width='750'
        height='400'
        autoplay='autoplay'
        muted
      >
        <source src={welcome} type='video/mp4' />
      </video>
    </div>
  );
}

export default Home;
