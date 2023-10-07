import { useEffect, useRef, useState } from "react";
interface MapProps {
  x: number;
  y: number;
}

const useMap = (props: MapProps) => {
  const { x, y } = props;
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<kakao.maps.Map>();

  useEffect(() => {
    const mapOption = {
      center: new kakao.maps.LatLng(y, x),
      level: 3,
    };

    if (!mapContainer || !mapContainer.current) return;

    const newMap = new kakao.maps.Map(mapContainer.current, mapOption);
    newMap.setMaxLevel(6);
    setMap(newMap);

    kakao.maps.event.addListener(newMap, "mousemove", () => {
      document.querySelectorAll(".nomap").forEach((el) => el.remove());
    });

    return () => {
      mapContainer.current!.innerHTML = ""; // 컴포넌트 언마운트시 지도 삭제
    };
  }, []);

  return { mapContainer, map };
};

export default useMap;
