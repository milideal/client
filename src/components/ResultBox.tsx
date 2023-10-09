import { useAppSelect } from "../redux/configStore.hooks";
import React from "react";

export interface WrapperProps {
  x: string;
  y: string;
  children: React.ReactNode;
}

interface WrapperRenderer {
  Wrapper: ({ x, y, children }: WrapperProps) => React.ReactElement;
}

const ResultBox = ({ Wrapper }: WrapperRenderer) => {
  const result = useAppSelect((state) => state.search.searchResults);
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
                {r.place_name}
              </span>
              <span className="font(14) NanumGothic 900 c(#999999)">
                {r.address_name}
              </span>
            </div>
          </Wrapper>
          <table></table>
        </>
      ))}
    </>
  );
};

export default ResultBox;
