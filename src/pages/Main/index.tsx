import ResultBox, { WrapperProps } from "../../components/ResultBox";
import SearchBox from "../../components/SearchBox";
import { useAppSelect } from "../../redux/configStore.hooks";
import searchImg from "../../assets/search-20x20.png";
import { Link } from "react-router-dom";

const Main = () => {
  const { isSearchCompleted } = useAppSelect((state) => state.search);
  return (
    <div className="vbox pack ml(30) mr(30)">
      <div className="vbox w(370)">
        <span className="font(32) GmarketSans 900 c(#363636) dark-white">
          총 1,214개의
          <br /> 군인 할인점들이 있어요.
        </span>
        <span className="font(16) NanumGothic 900 c(#999999)">
          23.09.19 업데이트
        </span>
      </div>
      <div className="wrap w(370) mt(50) mb(50)">
        <span className="font(16) NanumGothic 900 c(#363636) dark-white mb(10)">
          어디서 찾아볼까요?
        </span>
        <div className="hbox w(370) h(40) b(2/#505050) r(20) pl(12)">
          <img src={searchImg} className="w(20) h(20) mr(12)" alt="search" />
          <SearchBox placeholder={"양구시외버스터미널"} />
        </div>
        {isSearchCompleted && (
          <div className="h(~200) scroll-y mt(20) -webkit-scrollbar::w(8) -webkit-scrollbar-thumb::bg(#999999)+r(4) -webkit-scrollbar-track::bg(#E7E7E7)+r(4)">
            <ResultBox
              Wrapper={({ x, y, children }: WrapperProps) => (
                <Link to={`/map?x=${x}&y=${y}`}>{children}</Link>
              )}
            />
          </div>
        )}
      </div>
      <div className="vbox w(370) r(5) b(1/#D9D9D9) box-shadow(0/0/20/#000.1) pl(24) pt(14) pb(14)">
        <span className="font(14) 600 c(#363636) NanumGothic dark-white">
          할인점 추가하기
        </span>
        <span className="font(14) 600 c(#999999) NanumGothic ">
          군인 장병들에게 잊지 못할 경험을 선물하세요.
        </span>
      </div>
    </div>
  );
};

export default Main;
