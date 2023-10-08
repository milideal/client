import { useSearchParams } from "react-router-dom";
import KakaoMap from "./KakaoMap";
import Overlay from "./Overlay";

const Map = () => {
  const [searchParams] = useSearchParams();
  const x = searchParams.get("x");
  const y = searchParams.get("y");
  const level = searchParams.get("level");

  return (
    <>
      <span className="z(2) fixed x(center) y(0)">
        <Overlay />
      </span>
      <div className="w(100dvw) h(100dvh)">
        <KakaoMap
          x={x ? Number(x) : 126.570667}
          y={y ? Number(y) : 33.450701}
          level={Number(level) || 6}
        />
      </div>
      <div className="nomap fixed x(center)">
        정상적으로 지도가 안보일경우 브라우저를 업데이트 해주세요.
      </div>
    </>
  );
};

export default Map;
