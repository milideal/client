import { useAppSelect } from "../redux/configStore.hooks";
import React, { useEffect, useState } from "react";
import { useSearchStoresQuery } from "../redux/features/storeSearchAPI";

export interface WrapperProps {
  x: string;
  y: string;
  children: React.ReactNode;
}

interface WrapperRenderer {
  Wrapper: ({ x, y, children }: WrapperProps) => React.ReactElement;
}

const ResultBox = ({ Wrapper }: WrapperRenderer) => {
  const kakaoResult = useAppSelect((state) => state.search.searchResults);

  const storeSearchAPIResult = useSearchStoresQuery({
    searchQuery: useAppSelect((state) => state.search.value),
  }).data?.results;

  const [result, setResult] = useState<Array<any>>([]);

  useEffect(() => {
    const newMap = new Map();
    kakaoResult.forEach((r) => {
      newMap.set(r.place_name, r);
    });
    storeSearchAPIResult?.forEach((r) => {
      newMap.set(r.name, { ...newMap.get(r.name), ...r });
    });
    setResult(Array.from(newMap.values()));
  }, [kakaoResult, storeSearchAPIResult]);

  if (result.length === 0)
    return (
      <span className="font(14) NanumGothic 900 c(#999999) ml(12) mt(20)">
        검색 결과가 없습니다.
      </span>
    );
  return (
    <>
      {result.map((r) => (
        <>
          <Wrapper key={r.id} x={r.x} y={r.y}>
            <div className="vbox ml(12) mb(10) mt(10) w(358) pointer">
              <span className="font(14) NanumGothic 900 c(#363636) dark-white">
                {r.place_name ? r.place_name : r.name}
              </span>
              <span className="font(14) NanumGothic 900 c(#999999)">
                {r.address_name ? r.address_name : r.address}
              </span>
              {/* {r.name && (
                <span className="font(14) NanumGothic 900 c(#f00)">
                  군인 할인 중
                </span>
              )} */}
            </div>
          </Wrapper>
          <table></table>
        </>
      ))}
    </>
  );
};

export default ResultBox;
