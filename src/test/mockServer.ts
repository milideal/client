import { createServer, Response } from "miragejs";

const mockServer = ({ environment = "development" }) => {
  return createServer({
    environment,
    routes() {
      this.urlPrefix = "https://milideal.site";
      this.timing = 1000;
      this.get("/store", (_schema, _request) => {
        return new Response(
          200,
          {},
          {
            count: 1,
            next: null,
            previous: null,
            results: [
              {
                url: "http://milideal-api.run.goorm.io/store/seogwipo-hotel-jeju",
                slug: "seogwipo-hotel-jeju",
                address: "제주도 서귀포시 상예로 319",
                name: "seogwipo-hotel-jeju",
                coord: {
                  x: 126.394649837226,
                  y: 33.2731320756409,
                },
                storeType: "Accom",
                imageSrc: null,
                target: "ALL",
                promotion: null,
                tel: "064-738-0123",
                facilities: "노래방, 연회장, 스카이라운지, 식당, 커피숍, 매장",
                homepage: "www.welfare.mil.kr",
                endDate: null,
              },
            ],
          }
        );
      });
    },
  });
};

export default mockServer;
