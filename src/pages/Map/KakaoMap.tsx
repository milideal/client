import { useEffect } from "react";
import { getMarkerImageSrc } from "./utils";
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

  useEffect(() => {
    const mapContainer = document.getElementById("map") as HTMLElement,
      mapOption = {
        center: new kakao.maps.LatLng(y, x),
        level: 3,
      };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    map.setDraggable(true);
    const markers = storeList?.map((store) => {
      return new kakao.maps.Marker({
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
    });
    if (markers)
      markers.forEach((marker) => {
        kakao.maps.event.addListener(marker, "click", () => {
          map.panTo(marker.getPosition());
        });
      });

    map.setMaxLevel(6);
  }, [storeList]);

  return <div className="w(100%) h(100%)" id="map"></div>;
};

export default KakaoMap;
