import { useCallback, useEffect, useState } from "react";
import { getMarkerImageSrc } from "../utils";

import { StoreNode } from "../../../redux/types";

interface MarkerProps {
  map: kakao.maps.Map | undefined;
  storeList: StoreNode[] | undefined;
}

const useMarkers = (props: MarkerProps) => {
  const { map, storeList } = props;
  const [markers, setMarkers] = useState<
    {
      marker: kakao.maps.Marker;
      storeNode: StoreNode;
    }[]
  >([]);

  const addMarkerCB = useCallback(
    (store: StoreNode) =>
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(store.coord.y, store.coord.x),
        clickable: true,
        title: store.name,
        image: new kakao.maps.MarkerImage(
          getMarkerImageSrc(store),
          new kakao.maps.Size(64, 63),
          { offset: new kakao.maps.Point(20, 46) }
        ),
      }),
    [map]
  );
  const removeMarkerCB = useCallback(
    (marker: kakao.maps.Marker) => marker.setMap(null),
    [map]
  );

  useEffect(() => {
    if (!map || !storeList) return;

    const markersToAdd = storeList.filter(
      (item) => !markers.map((item) => item.storeNode.slug).includes(item.slug)
    );
    const markersToRemove = markers.filter(
      (item) =>
        !storeList.map((item) => item.slug).includes(item.storeNode.slug)
    );

    const newMarkers = markersToAdd.map((store) => {
      const marker = addMarkerCB(store);
      kakao.maps.event.addListener(marker, "click", () => {
        map.panTo(marker.getPosition());
      });
      return { marker, storeNode: store };
    });

    markersToRemove.forEach(({ marker }) => removeMarkerCB(marker));

    setMarkers((prevMarkers) => [
      ...newMarkers,
      ...prevMarkers.filter(
        (item) =>
          !markersToRemove
            .map((item) => item.storeNode.slug)
            .includes(item.storeNode.slug)
      ),
    ]);
  }, [map, storeList]);

  return markers;
};

export default useMarkers;
