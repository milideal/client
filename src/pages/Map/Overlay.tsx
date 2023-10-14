import searchImg from "../../assets/search-20x20.png";
import sleepCircleImg from "../../assets/sleep-circle-20x20.png";
import foodCircleImg from "../../assets/food-circle-20x20.png";
import cultureCircleImg from "../../assets/culture-circle-20x20.png";
import etcCircleImg from "../../assets/etc-circle-20x20.png";
import SearchBox from "../../components/SearchBox";
import { useAppSelect } from "../../redux/configStore.hooks";
import ResultBox, { WrapperProps } from "../../components/ResultBox";
import { Link } from "react-router-dom";

const Overlay = () => {
  const { isSearchCompleted } = useAppSelect((state) => state.search);
  return (
    <>
      <div className="pl(12) hbox mt(14) box-shadow(0/5/10/#000000.1) w(370) h(40) bg(#FFF) r(20)">
        <img
          src={searchImg}
          className="w(20) h(20) mr(12) pointer"
          alt="search"
        />
        <SearchBox placeholder={"어떤 매장을 찾으세요?"} />
      </div>
      {isSearchCompleted && (
        <div className="h(~200) bg(#fff) box-shadow(0/5/10/#000000.1) r(20) w(370) scroll-y mt(10) -webkit-scrollbar::w(8) -webkit-scrollbar-thumb::bg(#999999)+r(4) -webkit-scrollbar-track::bg(transparent)+r(4)">
          <ResultBox
            Wrapper={({ x, y, children }: WrapperProps) => (
              <Link reloadDocument to={`/map?x=${x}&y=${y}`}>
                {children}
              </Link>
            )}
          />
        </div>
      )}
      <div className="hbox mt(8) w(~370) h(40) gap(10) no-scrollbar">
        <div className="pl(10) pr(10) hbox box-shadow(0/5/10/#000000.1)  h(30) bg(#FFF) r(15) b(2/#FF9C07)">
          <img
            src={sleepCircleImg}
            className="w(10) h(10) mr(6) pointer"
            alt="o"
          />
          <span className="NanumGothic font(12) 900 c(#FF9C07)">숙박시설</span>
        </div>
        <div className="pl(10) pr(10) hbox box-shadow(0/5/10/#000000.1)  h(30) bg(#FFF) r(15) pointer">
          <img src={foodCircleImg} className="w(10) h(10) mr(6)" alt="o" />
          <span className="NanumGothic font(12) 900 c(#363636)">식당</span>
        </div>
        <div className="pl(10) pr(10) hbox box-shadow(0/5/10/#000000.1)  h(30) bg(#FFF) r(15)">
          <img
            src={cultureCircleImg}
            className="w(10) h(10) mr(6) pointer"
            alt="o"
          />
          <span className="NanumGothic font(12) 900 c(#363636)">문화/여가</span>
        </div>
        <div className="pl(10) pr(10) hbox box-shadow(0/5/10/#000000.1)  h(30) bg(#FFF) r(15)">
          <img
            src={etcCircleImg}
            className="w(10) h(10) mr(6) pointer"
            alt="o"
          />
          <span className="NanumGothic font(12) 900 c(#363636)">기타</span>
        </div>
      </div>
    </>
  );
};

export default Overlay;
