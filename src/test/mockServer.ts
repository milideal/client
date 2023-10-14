import { createServer, Response } from "miragejs";

const mockServer = (props: { environment: string }) => {
  return createServer({
    environment: props.environment,
    routes() {
      this.urlPrefix = "https://milideal-api.run.goorm.io";
      this.timing = 1000;
      this.get("/geo", (_schema, _request) => {
        return new Response(
          200,
          {},
          {
            count: 2,
            next: null,
            previous: null,
            results: [
              {
                url: "http://milideal-api.run.goorm.io/store/Sambat-makguksu",
                slug: "Sambat-makguksu",
                address: "[127.7816977, 37.9296045] 여기서부터 약 65미터",
                coord: {
                  x: 127.78091575237211,
                  y: 37.929575024516076,
                },
                name: "샘밭막국수",
                storeType: "food",
                imageSrc: null,
                target: "ALL",
                promotion: null,
                tel: null,
                facilities: null,
                homepage: null,
                endDate: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/SambatSoyanggangYacguk",
                slug: "SambatSoyanggangYacguk",
                address: "[127.7816977, 37.9296045] 여기서부터 약 96미터",
                coord: {
                  x: 127.782698758615,
                  y: 37.92944519339103,
                },
                name: "샘밭소양강약국",
                storeType: "etc",
                imageSrc: null,
                target: "ALL",
                promotion: null,
                tel: null,
                facilities: null,
                homepage: null,
                endDate: null,
              },
            ],
          }
        );
      });
      this.get("store", (_schema, _response) => {
        return new Response(
          200,
          {},
          {
            count: 24,
            next: null,
            previous: null,
            results: [
              {
                url: "http://milideal-api.run.goorm.io/store/cgv-buksuwon",
                slug: "cgv-buksuwon",
                address: "경기 수원시 장안구 경수대로 950",
                coord: {
                  x: 127.0070947859559,
                  y: 37.303485963912735,
                },
                name: "CGV 북수원",
                storeType: "culture",
                target: "ALL",
                promotion:
                  "주중 7,000원, 주말(2D,3D) 8,000원, 더블콤보 5,000원 할인, 동반3인",
                tel: "1544-1122",
                homepage: "https://www.cgv.co.kr/theaters/?theaterCode=0049",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/cgv-daejeongasuwon",
                slug: "cgv-daejeongasuwon",
                address: "대전 서구 도안동로11번길 45",
                coord: {
                  x: 127.35069165147829,
                  y: 36.30552013310163,
                },
                name: "CGV 대전가수원",
                storeType: "culture",
                target: "ALL",
                promotion:
                  "주중 7,000원, 주말(2D,3D) 8,000원, 더블콤보 5,000원 할인, 동반3인",
                tel: "1544-1122",
                homepage: "https://www.cgv.co.kr/theaters/?theaterCode=0286",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/cgv-dongsuwon",
                slug: "cgv-dongsuwon",
                address: "경기 수원시 팔달구 권광로 181",
                coord: {
                  x: 127.03231003231717,
                  y: 37.26390632559984,
                },
                name: "CGV 동수원",
                storeType: "culture",
                target: "ALL",
                promotion:
                  "주중 7,000원, 주말(2D,3D) 8,000원, 더블콤보 5,000원 할인, 동반3인",
                tel: "1544-1122",
                homepage: "https://www.cgv.co.kr/theaters/?theaterCode=0041",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/cgv-gwanggyo",
                slug: "cgv-gwanggyo",
                address: "경기 수원시 영통구 광교중앙로 124",
                coord: {
                  x: 127.05746079228076,
                  y: 37.2854244483569,
                },
                name: "CGV 광교",
                storeType: "culture",
                target: "ALL",
                promotion:
                  "주중 7,000원, 주말(2D,3D) 8,000원, 더블콤보 5,000원 할인, 동반3인",
                tel: "1544-1122",
                homepage: "https://www.cgv.co.kr/theaters/?theaterCode=0257",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/jdx-dongsuwonnyukoa",
                slug: "jdx-dongsuwonnyukoa",
                address: "경기 수원시 팔달구 인계로 154",
                coord: {
                  x: 127.034313303443,
                  y: 37.2663007314893,
                },
                name: "JDX 동수원뉴코아점",
                storeType: "etc",
                target: "ALL",
                promotion: "70% 이하 할인 상품 대상 추가 할인 10%",
                tel: "031-231-6447",
                homepage: "https://www.jdx.co.kr",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/jdx-suwonaulret",
                slug: "jdx-suwonaulret",
                address: "경기 수원시 권선구 여기산로 2",
                coord: {
                  x: 126.97872177694147,
                  y: 37.27770105860002,
                },
                name: "JDX 수원아울렛점",
                storeType: "etc",
                target: "ALL",
                promotion: "70% 이하 할인 상품 대상 추가 할인 10%",
                tel: "070-7426-7741",
                homepage: "https://www.jdx.co.kr",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/jdx-suwongwonseon",
                slug: "jdx-suwongwonseon",
                address: "경기 수원시 권선구 곡반정로 202",
                coord: {
                  x: 127.03547376876485,
                  y: 37.245472772126476,
                },
                name: "JDX 수원권선점",
                storeType: "etc",
                target: "ALL",
                promotion: "70% 이하 할인 상품 대상 추가 할인 10%",
                tel: "031-8019-5025",
                homepage: "https://www.jdx.co.kr",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/jdx-suwonpeurimieom",
                slug: "jdx-suwonpeurimieom",
                address: "경기 용인시 기흥구 중부대로 64",
                coord: {
                  x: 127.076239332745,
                  y: 37.2668758440414,
                },
                name: "JDX 수원프리미엄점",
                storeType: "etc",
                target: "ALL",
                promotion: "70% 이하 할인 상품 대상 추가 할인 10%",
                tel: "031-202-4583",
                homepage: "https://www.jdx.co.kr",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/jeidiekseu-paldalmun",
                slug: "jeidiekseu-paldalmun",
                address: "경기 수원시 팔달구 정조로776번길 6",
                coord: {
                  x: 127.017400405304,
                  y: 37.277127729555,
                },
                name: "제이디엑스 팔달문점",
                storeType: "etc",
                target: "ALL",
                promotion: "70% 이하 할인 상품 대상 추가 할인 10%",
                tel: "031-255-9004",
                homepage: "https://www.jdx.co.kr",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/lottecinema-buksuwon",
                slug: "lottecinema-buksuwon",
                address: "경기 수원시 장안구 천천로 100",
                coord: {
                  x: 126.98397812914982,
                  y: 37.30058826018479,
                },
                name: "롯데시네마 북수원",
                storeType: "culture",
                target: "ALL",
                promotion:
                  "2D 주중 7,000원, 주말 8,000원 관람, 3D 주중 8,000원, 주말 9,000원, 매점 2,000원  4,000원 할인 * 동반 3인",
                tel: "1544-8855",
                homepage:
                  "https://www.lottecinema.co.kr/NLCHS/Cinema/Detail?divisionCode=1&detailDivisionCode=2&cinemaID=3045",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/lottecinema-gwanggyoaulret",
                slug: "lottecinema-gwanggyoaulret",
                address: "경기 수원시 영통구 도청로 10",
                coord: {
                  x: 127.055924685094,
                  y: 37.2866632112275,
                },
                name: "롯데시네마 광교아울렛",
                storeType: "culture",
                target: "ALL",
                promotion:
                  "2D 주중 7,000원, 주말 8,000원 관람, 3D 주중 8,000원, 주말 9,000원, 매점 2,000원  4,000원 할인 * 동반 3인",
                tel: "1544-8855",
                homepage:
                  "https://www.lottecinema.co.kr/NLCHS/Cinema/Detail?divisionCode=1&detailDivisionCode=2&cinemaID=3030",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/lottecinema-seosuwon",
                slug: "lottecinema-seosuwon",
                address: "경기 수원시 권선구 금곡로 219",
                coord: {
                  x: 126.9540873239049,
                  y: 37.27498644164401,
                },
                name: "롯데시네마 서수원",
                storeType: "culture",
                target: "ALL",
                promotion:
                  "2D 주중 7,000원, 주말 8,000원 관람, 3D 주중 8,000원, 주말 9,000원, 매점 2,000원  4,000원 할인 * 동반 3인",
                tel: "1544-8855",
                homepage:
                  "https://www.lottecinema.co.kr/NLCHS/Cinema/Detail?divisionCode=1&detailDivisionCode=2&cinemaID=3043",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/lottecinema-suwon",
                slug: "lottecinema-suwon",
                address: "경기 수원시 권선구 세화로 134",
                coord: {
                  x: 126.996865929696,
                  y: 37.2643810368255,
                },
                name: "롯데시네마 수원",
                storeType: "culture",
                target: "ALL",
                promotion:
                  "2D 주중 7,000원, 주말 8,000원 관람, 3D 주중 8,000원, 주말 9,000원, 매점 2,000원  4,000원 할인 * 동반 3인",
                tel: "1544-8855",
                homepage:
                  "https://www.lottecinema.co.kr/NLCHS/Cinema/Detail?divisionCode=1&detailDivisionCode=2&cinemaID=3024",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/lotterentacar-junggochayeongeop1",
                slug: "lotterentacar-junggochayeongeop1",
                address: "경기 수원시 권선구 권선로 308-5",
                coord: {
                  x: 126.987673276036,
                  y: 37.2582758731656,
                },
                name: "롯데렌터카 중고차영업1지점",
                storeType: "etc",
                target: "ALL",
                promotion: "단기 렌터카 상시 50% 할인(전역 예비역병사 1년내)",
                tel: "031-322-8000",
                homepage: "https://www.lotterentacar.net",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/lotterentacar-suwon",
                slug: "lotterentacar-suwon",
                address: "경기 수원시 팔달구 인계로 123",
                coord: {
                  x: 127.03091372091693,
                  y: 37.2678460533897,
                },
                name: "롯데렌터카 수원지점",
                storeType: "etc",
                target: "ALL",
                promotion: "단기 렌터카 상시 50% 할인(전역 예비역병사 1년내)",
                tel: "031-215-8181",
                homepage: "https://www.lotterentacar.net",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/megabox-suwonakpeulraja",
                slug: "megabox-suwonakpeulraja",
                address: "경기 수원시 팔달구 덕영대로 924",
                coord: {
                  x: 127.000169109369,
                  y: 37.2665525892817,
                },
                name: "메가박스 수원AK플라자",
                storeType: "culture",
                target: "ALL",
                promotion:
                  "2D 주중 7,000원, 주말 8,000원 관람, 3D 주중 8,000원, 주말 9,000원, 매점더블콤보 6000원 할인 * 동반 3인",
                tel: "1544-0070",
                homepage: "https://www.megabox.co.kr/theater?brchNo=0052",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/megabox-suwonhomaesil",
                slug: "megabox-suwonhomaesil",
                address: "경기 수원시 권선구 호매실로90번길 76",
                coord: {
                  x: 126.9643328776692,
                  y: 37.25874959648229,
                },
                name: "메가박스 수원호매실",
                storeType: "culture",
                target: "ALL",
                promotion:
                  "2D 주중 7,000원, 주말 8,000원 관람, 3D 주중 8,000원, 주말 9,000원, 매점더블콤보 6000원 할인 * 동반 3인",
                tel: "1544-0070",
                homepage: "https://www.megabox.co.kr/theater?brchNo=0036",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/megabox-suwonnammun",
                slug: "megabox-suwonnammun",
                address: "경기 수원시 팔달구 행궁로 71",
                coord: {
                  x: 127.01594346221653,
                  y: 37.27644494626134,
                },
                name: "메가박스 수원남문",
                storeType: "culture",
                target: "ALL",
                promotion:
                  "2D 주중 7,000원, 주말 8,000원 관람, 3D 주중 8,000원, 주말 9,000원, 매점더블콤보 6000원 할인 * 동반 3인",
                tel: "1544-0070",
                homepage: "https://www.megabox.co.kr/theater?brchNo=0042",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/megabox-suwonnammun",
                slug: "megabox-suwonnammun",
                address: "경기 수원시 팔달구 행궁로 71",
                coord: {
                  x: 127.01594346221653,
                  y: 37.27644494626134,
                },
                name: "메가박스 수원남문",
                storeType: "culture",
                target: "ALL",
                promotion:
                  "2D 주중 7,000원, 주말 8,000원 관람, 3D 주중 8,000원, 주말 9,000원, 매점더블콤보 6000원 할인 * 동반 3인",
                tel: "1544-0070",
                homepage: "https://www.megabox.co.kr/theater?brchNo=0042",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/megabox-yeongtong",
                slug: "megabox-yeongtong",
                address: "경기 수원시 영통구 봉영로 1579",
                coord: {
                  x: 127.07148394861187,
                  y: 37.25255133184155,
                },
                name: "메가박스 영통",
                storeType: "culture",
                target: "ALL",
                promotion:
                  "2D 주중 7,000원, 주말 8,000원 관람, 3D 주중 8,000원, 주말 9,000원, 매점더블콤보 6000원 할인 * 동반 3인",
                tel: "1544-0070",
                homepage: "https://www.megabox.co.kr/theater?brchNo=4431",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/suwon-sports-complex",
                slug: "suwon-sports-complex",
                address: "경기 수원시 장안구 경수대로 893",
                coord: {
                  x: 127.01136094698745,
                  y: 37.297755038633156,
                },
                name: "수원 종합운동장",
                storeType: "culture",
                target: "ALL",
                promotion: "현역장병 본인 및 동반 1인까지 무료입장",
                tel: "031-240-2700",
                homepage: "",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/suwon-worldcup-stadium",
                slug: "suwon-worldcup-stadium",
                address: "경기 수원시 팔달구 월드컵로 310",
                coord: {
                  x: 127.036920677186,
                  y: 37.2864976648853,
                },
                name: "수원 월드컵 경기장",
                storeType: "culture",
                target: "ALL",
                promotion: "현역장병 본인 및 동반 1인까지 무료입장",
                tel: "031-202-2002",
                homepage: "",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/vips-ajudae",
                slug: "vips-ajudae",
                address: "경기 수원시 팔달구 중부대로 233",
                coord: {
                  x: 127.04167927996606,
                  y: 37.27579714205324,
                },
                name: "빕스 아주대점",
                storeType: "food",
                target: "ALL",
                promotion:
                  "비수기 주중 최대75%, 주말, 연휴 최대 40%, 65%, 극성수기 최대 30%, 해당업체 사이트 접속 필요",
                tel: "031-216-1997",
                homepage: "https://www.ivips.co.kr",
                score__avg: null,
              },
              {
                url: "http://milideal-api.run.goorm.io/store/vips-suwonyeoksa",
                slug: "vips-suwonyeoksa",
                address: "경기 수원시 팔달구 덕영대로 924",
                coord: {
                  x: 127.00009019108295,
                  y: 37.26606602678541,
                },
                name: "빕스 수원역사점",
                storeType: "food",
                target: "ALL",
                promotion:
                  "비수기 주중 최대75%, 주말, 연휴 최대 40%, 65%, 극성수기 최대 30%, 해당업체 사이트 접속 필요",
                tel: "031-240-1997",
                homepage: "https://www.ivips.co.kr",
                score__avg: null,
              },
            ],
          }
        );
      });
      this.passthrough("http://dapi.kakao.com/**");
    },
  });
};

export default mockServer;
