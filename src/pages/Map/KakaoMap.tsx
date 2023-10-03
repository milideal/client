import { useMap, useMarkers } from "./hooks";
import { useGetStoresQuery } from "../../redux/features/nodesAPI";

interface KakaoMapProps {
  x: number;
  y: number;
}

const KakaoMap = ({ x, y }: KakaoMapProps) => {
  const storeList = useGetStoresQuery({
    x: x,
    y: y,
    distance: 100,
  }).data?.results;

  const { mapContainer, map } = useMap({
    x: x,
    y: y,
  });
  useMarkers({ storeList: storeList, map: map });

  return <div className="w(100%) h(100%)" ref={mapContainer}></div>;
};

export default KakaoMap;
