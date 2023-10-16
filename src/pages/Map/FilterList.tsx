import sleepCircleImg from "../../assets/sleep-circle-20x20.png";
import foodCircleImg from "../../assets/food-circle-20x20.png";
import cultureCircleImg from "../../assets/culture-circle-20x20.png";
import etcCircleImg from "../../assets/etc-circle-20x20.png";
import { useLazyGetStoresQuery } from "../../redux/features/nodesAPI";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelect } from "../../redux/configStore.hooks";
import { toggleSelection } from "../../redux/features/filterSlice";

const FilterList = () => {
  const selected = useAppSelect((state) => state.filter);
  const dispatch = useAppDispatch();

  //?x=126.9842391930309&y=37.26565950891007&level=5
  const [searchParams] = useSearchParams();
  const lng = searchParams.get("x");
  const lat = searchParams.get("y");
  const level = searchParams.get("level");

  const [sendQuery] = useLazyGetStoresQuery();
  const toggleSelected = (id: string) => {
    dispatch(toggleSelection({ key: id }));
    sendQuery({
      x: lng ? Number(lng) : 126.570667,
      y: lat ? Number(lat) : 33.450701,
      level: Number(level) || 6,
    });
  };

  return (
    <div className="hbox mt(8) w(~370) h(40) gap(10) no-scrollbar">
      {filters.map((filter) =>
        selected[filter.filterId] ? (
          <div
            key={filter.filterId}
            className={`pl(10) pr(10) hbox box-shadow(0/5/10/#000000.1)  h(30) bg(#FFF) r(15) pointer`}
            onClick={() => toggleSelected(filter.filterId)}
            style={{ border: `2px ${filter.color} solid` }}
          >
            <img src={filter.img} className="w(10) h(10) mr(6)" alt="o" />
            <span
              className={`NanumGothic font(12) 900`}
              style={{ color: filter.color }}
            >{`${filter.name}`}</span>
          </div>
        ) : (
          <div
            key={filter.filterId}
            className={`pl(10) pr(10) hbox box-shadow(0/5/10/#000000.1)  h(30) bg(#FFF) r(15) b(2/transparent) pointer`}
            onClick={() => toggleSelected(filter.filterId)}
          >
            <img src={filter.img} className="w(10) h(10) mr(6)" alt="o" />
            <span
              className={`NanumGothic font(12) 900 c(#363636)`}
            >{`${filter.name}`}</span>
          </div>
        )
      )}
    </div>
  );
};

interface Filter {
  name: string;
  img: string;
  filterId: "accommodation" | "food" | "culture" | "etc";
  color: string;
}

const filters: Filter[] = [
  {
    name: "숙박시설",
    img: sleepCircleImg,
    filterId: "accommodation",
    color: "#FF9C07",
  },
  {
    name: "식당",
    img: foodCircleImg,
    filterId: "food",
    color: "#FF5207",
  },
  {
    name: "문화/여가",
    img: cultureCircleImg,
    filterId: "culture",
    color: "#0788FF",
  },
  {
    name: "기타",
    img: etcCircleImg,
    filterId: "etc",
    color: "#898989",
  },
];

export default FilterList;
