export interface StoreNode {
  url: string; // "http://milideal-api.run.goorm.io/store/seogwipo-hotel-jeju";
  slug: string; // "seogwipo-hotel-jeju";
  address: string; // "제주도 서귀포시 상예로 319";
  name: string; //"seogwipo-hotel-jeju";
  coord: {
    x: number; //126.394649837226;
    y: number; //33.2731320756409;
  };
  storeType: string; // "Accom";
  imageSrc?: string;
  target: string;
  promotion?: string;
  tel?: string;
  facilities?: string;
  homepage?: string;
  endDate: null;
}

export interface StoreNodes {
  count: 0;
  next: null;
  previous: null;
  results: StoreNode[];
}
export interface nodesAPIProps {
  x: number;
  y: number;
  level?: number;
}

export interface storeSearchAPIProps {
  searchQuery: string;
}
