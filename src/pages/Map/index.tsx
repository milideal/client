import { useParams, useSearchParams } from "react-router-dom";
import KakaoMap from "./KakaoMap";
import Overlay from "./Overlay";
import DetailsModal from "./DetailsModal";
import { useEffect } from "react";
import { useAppDispatch, useAppSelect } from "../../redux/configStore.hooks";
import { setSelectedNode } from "../../redux/features/nodeData";

const Map = () => {
  const dispatch = useAppDispatch();
  const { selected } = useAppSelect((state) => state.nodeData);

  const [searchParams] = useSearchParams();
  const x = searchParams.get("x");
  const y = searchParams.get("y");
  const level = searchParams.get("level");

  const { store_slug } = useParams();

  useEffect(() => {
    if (!store_slug) return;
    fetch(`https://milideal-api.run.goorm.io/store/${store_slug}`).then((doc) =>
      doc.json().then((json) => {
        dispatch(setSelectedNode({ value: json }));
      })
    );
  }, []);

  if (location.pathname.includes("/map/") && !selected)
    return <div className="MapIndex">Loading...</div>;

  return (
    <div className="MapIndex">
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
      <DetailsModal />
      <div className="nomap fixed x(center)">
        정상적으로 지도가 안보일경우 브라우저를 업데이트 해주세요.
      </div>
    </div>
  );
};

export default Map;
