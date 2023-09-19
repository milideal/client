import { Route, Routes } from 'react-router-dom';
import Menu from "./pages/Menu";
import MapView from './pages/MapView';

function App() {
  return (
    <Routes>
      <Route path="/" element = {<Menu />} />
      <Route path="/map" element = {<MapView />} />
    </Routes>
  )
}

export default App
