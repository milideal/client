import { useRef, useState } from "react";
import { useAppDispatch } from "../redux/configStore.hooks";
import { setSearchResult, setQuery } from "../redux/features/searchSlice";
import searchImg from "/src/assets/search-20x20.png";

const SearchBox = (props: { placeholder: string }) => {
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState("");

  const places = new kakao.maps.services.Places();

  const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(setQuery({ value: queryRef.current!.value }));
    setInputValue(e.target.value);

    if (e.target.value.length === 0) {
      dispatch(setSearchResult({ result: [], status: "INVALID_REQUEST" }));
      return;
    }

    if (places)
      places.keywordSearch(queryRef.current!.value, (result, status) => {
        dispatch(setSearchResult({ result, status }));
      });
  };
  const queryRef = useRef<HTMLInputElement>(null);

  return (
    <div className="hbox w(370) h(40) b(2/#505050) r(20) pl(12)">
      <img src={searchImg} className="w(20) h(20) mr(12)" alt="search" />
      <input
        onChange={onQueryChange}
        value={inputValue}
        ref={queryRef}
        spellCheck={false}
        className="placeholder::font(14)+900+c(#aaa) NanumGothic font(14) 900 c(#363636) dark-white w(300) dark-transparent"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default SearchBox;
