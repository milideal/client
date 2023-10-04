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
    </>
  );
};

export default Map;
