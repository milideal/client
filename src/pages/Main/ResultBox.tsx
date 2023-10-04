import { Link } from "react-router-dom";
import { useAppSelect } from "../../redux/configStore.hooks";

const ResultBox = () => {
  const result = useAppSelect((state) => state.search.searchResults);
  if (result.length === 0)
    return (
      <span className="font(14) NanumGothic 900 c(#999999) ml(12) mt(20)">
        검색 결과가 없습니다.
      </span>
    );
  return (
    <div className="h(~200) scroll-y mt(20) -webkit-scrollbar::w(8) -webkit-scrollbar-thumb::bg(#999999)+r(4) -webkit-scrollbar-track::bg(#E7E7E7)+r(4)">
      {result.map((r) => (
        <Link key={r.id} to={`/map?x=${r.x}&y=${r.y}`}>
          <div className="vbox ml(12) mb(20) w(358) pointer">
            <span className="font(14) NanumGothic 900 c(#363636) dark-white">
              {r.place_name}
            </span>
            <span className="font(14) NanumGothic 900 c(#999999)">
              {r.address_name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ResultBox;
