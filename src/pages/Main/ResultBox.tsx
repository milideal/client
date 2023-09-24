import { Link } from "react-router-dom";

const ResultBox = (props: {
  result: kakao.maps.services.PlacesSearchResult;
}) => {
  if (props.result.length === 0) return <></>;
  return props.result.map((r) => (
    <Link key={r.id} to={`/map?x=${r.x}&y=${r.y}`}>
      <div className="vbox ml(12) mt(20) w(358) pointer">
        <span className="font(14) NanumGothic 900 c(#363636)">
          {r.place_name}
        </span>
        <span className="font(14) NanumGothic 900 c(#999999)">
          {r.address_name}
        </span>
      </div>
    </Link>
  ));
};

export default ResultBox;