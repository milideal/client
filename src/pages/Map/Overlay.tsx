import searchImg from "../../assets/search-20x20.png";
import SearchBox from "../../components/SearchBox";
import { useAppSelect } from "../../redux/configStore.hooks";
import ResultBox, { WrapperProps } from "../../components/ResultBox";
import { Link } from "react-router-dom";
import FilterList from "./FilterList";

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
      <FilterList />
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
    </>
  );
};

export default Overlay;
