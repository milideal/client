import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Map from "./pages/Map";
import { useState } from "react";

function App() {
  const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);
  const newScript = document.createElement("script");
  newScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
    import.meta.env.VITE_KAKAO_MAP_APP_KEY
  }&libraries=services&autoload=false`;
  document.head.appendChild(newScript);
  newScript.onload = () => {
    kakao.maps.load(() => {
      setIsKakaoLoaded(true);
    });
  };
  return (
    isKakaoLoaded && (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    )
  );
}

export default App;
