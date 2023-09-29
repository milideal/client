import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/configStore.hooks";
import { nodesAPI } from "../../redux/features/nodeSlice";
import KakaoMap from "./KakaoMap";
import Overlay from "./Overlay";

const Map = () => {
  const [searchParams] = useSearchParams();
  const x = searchParams.get("x");
  const y = searchParams.get("y");

  const dispatch = useAppDispatch();

  const position = {
    x: x ? Number(x) : 126.570667,
    y: y ? Number(y) : 33.450701,
  };

  useEffect(() => {
    const fetchStores = async () => {
      await dispatch(nodesAPI({ x: position.x, y: position.y, distance: 100 }));
    };

    fetchStores();
    [position];
  }, []);

  return (
    <>
      <span className="z(2) fixed top(0)">
        <Overlay />
      </span>
      <div className="w(100dvw) h(100dvh)">
        <KakaoMap x={position.x} y={position.y} />
      </div>
    </>
  );
};

export default Map;
