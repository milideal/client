import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import MapView from "./pages/MapView/MapView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/map" element={<MapView />} />
    </Routes>
  );
}

export default App;
