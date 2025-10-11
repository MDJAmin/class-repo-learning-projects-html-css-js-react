import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GsapTo from "./pages/GsapTo";
import Home from "./pages/Home";
import GsapText from "./pages/GsapText";
import GsapScrollTrigger from "./pages/GsapScrollTrigger";
import GsapStagger from "./pages/GsapStagger";
import GsapTimeline from "./pages/GsapTimeline";
import GsapFromTo from "./pages/GsapFromTo";
import GsapFrom from "./pages/GsapFrom";
import "./App.css"
const App = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Router>
        <Routes>
          <Route path="/gsapto" element={<GsapTo />} />
          <Route path="/gsapfrom" element={<GsapFrom />} />
          <Route path="/gsapfromto" element={<GsapFromTo />} />
          <Route path="/gsaptimeline" element={<GsapTimeline />} />
          <Route path="/gsapstagger" element={<GsapStagger />} />
          <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
          <Route path="/gsaptext" element={<GsapText />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;