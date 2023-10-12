import { useEffect, useRef, useState } from "react";
import { useGetStoresQuery } from "../../../redux/features/nodesAPI";
import { useMarkers } from ".";
import { useAppSelect } from "../../../redux/configStore.hooks";

interface MapProps {
  x: number;
  y: number;
  level: number;
}

const useMap = (props: MapProps) => {
  const { x, y, level: p_level } = props;
  const [lat, setLat] = useState(y);
  const [lng, setLng] = useState(x);
  const [level, setLevel] = useState<number>(p_level);
  const [map, setMap] = useState<kakao.maps.Map>();
  const mapContainer = useRef<HTMLDivElement>(null);

  const storeList = useGetStoresQuery({
    x: lng,
    y: lat,
    level: level,
  }).data?.results;
  useMarkers({ storeList, map });

  const mapViewChangeHandler = (newMap: kakao.maps.Map) => () => {
    const latlng = newMap.getCenter();
    const url = new URL(location.href);
    const _lat = latlng.getLat();
    const _lng = latlng.getLng();
    const _level = newMap.getLevel();

    setLat(_lat);
    setLng(_lng);
    setLevel(_level);

    if (url.pathname.includes("/map/")) return;

    url.searchParams.set("x", _lng.toString());
    url.searchParams.set("y", _lat.toString());
    _level && url.searchParams.set("level", _level.toString());
    window.history.replaceState({}, "", url.toString());
  };

  useEffect(() => {
    const mapOption = {
      center: new kakao.maps.LatLng(y, x),
      level,
    };

    if (!mapContainer || !mapContainer.current) return;

    const newMap = new kakao.maps.Map(mapContainer.current, mapOption);

    // 지도 기본 설정
    newMap.setMaxLevel(6);
    kakao.maps.event.addListener(newMap, "idle", mapViewChangeHandler(newMap));
    // kakao.maps.event.addListener(
    //   newMap,
    //   "zoom_changed",
    //   mapViewChangeHandler(newMap)
    // );
    setMap(newMap);

    kakao.maps.event.addListener(newMap, "mousemove", () => {
      document.querySelectorAll(".nomap").forEach((el) => el.remove());
    });

    return () => {
      // 등록한 listener 삭제
      kakao.maps.event.removeListener(
        newMap,
        "idle",
        mapViewChangeHandler(newMap)
      );
      // kakao.maps.event.removeListener(
      //   newMap,
      //   "zoom_changed",
      //   mapViewChangeHandler(newMap)
      // );
      if (mapContainer.current) mapContainer.current.innerHTML = ""; // 컴포넌트 언마운트시 지도 삭제
    };
  }, []);

  const { selected } = useAppSelect((state) => state.nodeData);
  useEffect(
    () =>
      map?.panTo(
        new kakao.maps.LatLng(
          selected?.coord.y || lat,
          selected?.coord.x || lng
        )
      ),
    [selected]
  );

  return { mapContainer, map };
};

export default useMap;
