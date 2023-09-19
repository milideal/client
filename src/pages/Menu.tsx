import sleepImg from "../assets/home-72x72.png";
import foodImg from "../assets/food-72x72.png";
import movieImg from "../assets/movie-72x72.png";
import etcImg from "../assets/etc-72x72.png";

const Menu = () => {
  return <div className="vbox ml(30) mr(30)">
    <div className="vbox">
      <span className="font(32) 900 c(#363636)">총 1,214개의<br/> 군인 할인점들이 있어요.</span>
      <span className="font(16) 900 c(#999999)">23.09.19 업데이트</span>
    </div>
    <div className="wrap gap(10) w(370) mt(24)">
      <div className="vbox pack w(180) h(180) r(5) b(1/#D9D9D9) box-shadow(0/0/20/#000.1)">
        <img src={sleepImg} />
        <span className="font(16) 900 c(#363636)">숙박시설</span>
      </div>
      <div className="vbox pack w(180) h(180) r(5) b(1/#D9D9D9) box-shadow(0/0/20/#000.1)">
        <img src={foodImg} />
        <span className="font(16) 900 c(#363636)">식당</span>
      </div>
      <div className="vbox pack w(180) h(180) r(5) b(1/#D9D9D9) box-shadow(0/0/20/#000.1)">
        <img src={movieImg} />
        <span className="font(16) 900 c(#363636)">문화시설</span>
      </div>
      <div className="vbox pack w(180) h(180) r(5) b(1/#D9D9D9) box-shadow(0/0/20/#000.1)">
        <img src={etcImg} />
        <span className="font(16) 900 c(#363636)">기타</span>
      </div>
      <div className="vbox w(370) r(5) b(1/#D9D9D9) box-shadow(0/0/20/#000.1) pl(24) pt(28) pb(28)">
        <span className="font(14) 900 c(#363636)">할인점 추가하기</span>
        <span className="font(14) 900 c(#999999)">군인 장병들에게 잊지 못할 경험을 선물하세요.</span>
      </div>
    </div>
  </div>
}

export default Menu;