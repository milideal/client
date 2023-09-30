import React from "react";
import locationImage from "../../assets/MapView/location.svg";
import phoneIcon from "../../assets/MapView/phone.svg";
import websiteIcon from "../../assets/MapView/website.svg";
import descriptionIcon from "../../assets/MapView/description.svg";
import closeIcon from "../../assets/MapView/close.svg";

import "./MapViewModal.css";

function MapViewModal({ className }: { className?: string }) {
  return (
    <div
      className={`MapViewModal w(341) p(29) r(18) vbox gap(16) box-shadow(0/20/40/#000.25) NanumGothic ${
        className || ""
      }`}
    >
      <div className="heading text(center) bold">
        <div className="c(#999) font-size(14)">숙박시설</div>
        <div className="font-size(24)">서귀포호텔</div>
      </div>

      <div className="info vbox gap(5) font-size(14)">
        <div className="hbox gap(12)">
          <div className="icon">
            <img src={locationImage} />
          </div>
          <div className="text">제주도 서귀포시 상예로 319</div>
        </div>
        <div className="phone hbox gap(12)">
          <div className="icon">
            <img src={phoneIcon} />
          </div>
          <div className="text">
            <a href="tel:0647380123" className="link">
              064-738-0123
            </a>
          </div>
        </div>
        <div className="desc hbox(top) gap(12)">
          <div className="icon descriptionIcon">
            <img src={descriptionIcon} />
          </div>
          <div className="text">
            해당 시설은 국군복지단에서 운영하는 군 휴양시설로, 자세한 내용은
            국군복지단 홈페이지를 통해 확인하시기 바랍니다.
          </div>
        </div>
        <div className="site desc hbox gap(12)">
          <div className="icon">
            <img src={websiteIcon} />
          </div>
          <div className="text">
            <a
              href="https://www.welfare.mil.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              www.welfare.mil.kr
            </a>
          </div>
        </div>
      </div>

      <div className="close-btn absolute right(14) top(16) cursor">
        <img src={closeIcon} alt="Close Button" />
      </div>
    </div>
  );
}

export default MapViewModal;
