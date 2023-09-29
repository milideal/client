import { useState } from "react";
import ResultBox from "./ResultBox";

import searchImg from "/src/assets/search-20x20.png";

const Menu = () => {
  const [searchResults, setSearchResults] =
    useState<kakao.maps.services.PlacesSearchResult>([]);
  const [isSearchCompleted, setIsSearchCompleted] = useState(false);

  const [keyword, setKeyword] = useState("");
  const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const detectEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchKeyword();
    }
  };

  const searchKeyword = () => {
    const places = new kakao.maps.services.Places();
    if (keyword === "") return;
    places.keywordSearch(keyword, (result, status) => {
      if (status == kakao.maps.services.Status.OK) {
        setSearchResults(result);
        setIsSearchCompleted(true);
      } else if (status == kakao.maps.services.Status.ZERO_RESULT) {
        setSearchResults([]);
        setIsSearchCompleted(true);
      }
    });
  };

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
        <div className="w(370) h(40) b(2/#505050) r(20) pl(12) hbox">
          <img
            src={searchImg}
            className="w(20) h(20) mr(12) pointer"
            alt="search"
            onClick={searchKeyword}
          />
          <input
            onChange={onQueryChange}
            onKeyDown={detectEnter}
            value={keyword}
            spellCheck={false}
            className="placeholder::font(14)+900+c(#aaa) NanumGothic font(14) 900 c(#363636) dark-white w(300) dark-transparent"
            placeholder="양구시외버스터미널"
          />
        </div>
        {isSearchCompleted && <ResultBox result={searchResults} />}
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

export default Menu;
