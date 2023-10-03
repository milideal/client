import cultureImg from "../../assets/culture-64x63.png";
import foodImg from "../../assets/food-64x63.png";
import sleepImg from "../../assets/sleep-64x63.png";
import etcImg from "../../assets/etc-64x63.png";
import { match } from "ts-pattern";
import { Node } from "../../redux/types";
import { useEffect, useState } from "react";

const getMarkerImageSrc = (store: Node): string => {
  return match<Node, string>(store)
    .with({ storeType: "culture" }, () => cultureImg)
    .with({ storeType: "food" }, () => foodImg)
    .with({ storeType: "sleep" }, () => sleepImg)
    .otherwise(() => etcImg);
};

interface MapProps {
  x: number;
  y: number;
  mapContainer: React.RefObject<HTMLDivElement>;
}

const useMap = (props: MapProps) => {
  const [map, setMap] = useState<kakao.maps.Map>();
  const { mapContainer, x, y } = props;

  useEffect(() => {
    if (map) return;

    const mapOption = {
      center: new kakao.maps.LatLng(y, x),
      level: 3,
    };

    if (!mapContainer || !mapContainer.current) return;

    const newMap = new kakao.maps.Map(mapContainer.current, mapOption);
    newMap.setMaxLevel(6);
    setMap(newMap);
  }, []);

  return map;
};

interface MarkerProps {
  map: kakao.maps.Map | undefined;
  storeList: Node[] | undefined;
}

const useMarkers = (props: MarkerProps) => {
  const { map, storeList } = props;
  const [markers, setMarkers] = useState<kakao.maps.Marker[]>([]);
  useEffect(() => {
    if (!map || !storeList) return;

    setMarkers(
      storeList.map((store) => {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(store.coord.y, store.coord.x),
          clickable: true,
          title: store.name,
          image: new kakao.maps.MarkerImage(
            getMarkerImageSrc(store),
            new kakao.maps.Size(64, 63),
            { offset: new kakao.maps.Point(20, 46) }
          ),
        });
        kakao.maps.event.addListener(marker, "click", () => {
          map.panTo(marker.getPosition());
        });
        return marker;
      })
    );
  }, [map, storeList]);

  return markers;
};

export { getMarkerImageSrc, useMap, useMarkers };
