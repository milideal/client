import { useMap } from "./hooks";

interface KakaoMapProps {
  x: number;
  y: number;
}

const KakaoMap = ({ x, y }: KakaoMapProps) => {
  const { mapContainer } = useMap({
    x: x,
    y: y,
  });

  return <div className="w(100%) h(100%)" ref={mapContainer}></div>;
};

export default KakaoMap;
