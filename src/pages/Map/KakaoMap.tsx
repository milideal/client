import { useMap } from "./hooks";

interface KakaoMapProps {
  x: number;
  y: number;
  level: number;
}

const KakaoMap = ({ x, y, level }: KakaoMapProps) => {
  const { mapContainer } = useMap({
    x: x,
    y: y,
    level: level,
  });

  return <div className="w(100%) h(100%)" ref={mapContainer}></div>;
};

export default KakaoMap;
