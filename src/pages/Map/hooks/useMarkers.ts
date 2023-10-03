import { useEffect, useState } from "react";
import { getMarkerImageSrc } from "../utils";

import { StoreNode } from "../../../redux/types";

interface MarkerProps {
  map: kakao.maps.Map | undefined;
  storeList: StoreNode[] | undefined;
}

const useMarkers = (props: MarkerProps) => {
  const { map, storeList } = props;

  const [markers, setMarkers] = useState<kakao.maps.Marker[]>([]);
  useEffect(() => {
    if (!map || !storeList) return;

    const markers = storeList.map((store) => {
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
    });

    setMarkers(markers);
  }, [map, storeList]);

  return markers;
};

export default useMarkers;
