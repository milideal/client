import { createServer, Response } from "miragejs";

const mockServer = ({ environment = "development" }) => {
  return createServer({
    environment,
    routes() {
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
      this.passthrough("http://dapi.kakao.com/**");
    },
  });
};

export default mockServer;
