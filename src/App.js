import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Rates from "./pages/Rates";
import Singleinfo from "./pages/Singleinfo";
import Navebar from "./components/Navebar";
import SingleinfoSeries from "./pages/SingleinfoSeries";
import "./css/main.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navebar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rated" element={<Rates />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/single-info/:id" element={<Singleinfo />} />
          <Route
            path="/single-info-series/:id"
            element={<SingleinfoSeries />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
