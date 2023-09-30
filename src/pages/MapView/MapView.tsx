import { useEffect } from "react";
import MapViewModal from "./MapViewModal";

const MapView = () => {
  useEffect(() => {
    const mapContainer = document.getElementById("map") as HTMLElement, // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.2731320756409, 126.394649837226), // 지도의 중심좌표
        level: 2, // 지도의 확대 레벨
      };

    const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    console.log(map);

    // 마커를 표시할 위치와 title 객체 배열입니다
    const positions = [
      {
        title: "카카오",
        latlng: new kakao.maps.LatLng(33.2731320756409, 126.394649837226),
      },
    ];

    // 마커 이미지의 이미지 주소입니다
    const imageSrc =
      "https://velog.velcdn.com/images/dnr6054/post/04c9d7e4-774f-42bf-97c1-9681e853b687/image.png";

    for (let i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new kakao.maps.Size(24, 30);

      // 마커 이미지를 생성합니다
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
      console.log(marker);

      // 마커 클릭 이벤트
      kakao.maps.event.addListener(
        map,
        "click",
        function (mouseEvent: kakao.maps.event.MouseEvent) {}
      );
    }
  }, []);

  return (
    <div>
      <div className="w(100vw) h(100vh)" id="map"></div>
      <MapViewModal />
    </div>
  );
};

export default MapView;
