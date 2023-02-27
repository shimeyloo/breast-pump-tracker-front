import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import Pumping from "./components/pumping/Pumping";
import Stats from "./components/stats/Stats.jsx";
import Promo from "./components/Promo.jsx";

const serverURL = "https://breast-pump-tracker-378404.wl.r.appspot.com";

const App = () => (
  <div>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/log' element={<Pumping serverURL={serverURL} />} />
        <Route path='/stats' element={<Stats serverURL={serverURL} />} />
        <Route path='/promo' element={<Promo />} />
      </Routes>
    </Router>
  </div>
);

export default App;
