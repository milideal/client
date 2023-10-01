import { useSearchParams } from "react-router-dom";
import KakaoMap from "./KakaoMap";
import Overlay from "./Overlay";
import DetailsModal from "./DetailsModal";

const Map = () => {
  const [searchParams] = useSearchParams();
  const x = searchParams.get("x");
  const y = searchParams.get("y");

  return (
    <>
      <span className="z(2) fixed x(center) y(0)">
        <Overlay />
      </span>
      <div className="w(100dvw) h(100dvh)">
        <KakaoMap
          x={x ? Number(x) : 126.570667}
          y={y ? Number(y) : 33.450701}
        />
      </div>
      <DetailsModal />
    </>
  );
};

export default Map;
