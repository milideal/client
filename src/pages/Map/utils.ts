import cultureImg from "../../assets/culture-64x63.png";
import foodImg from "../../assets/food-64x63.png";
import sleepImg from "../../assets/sleep-64x63.png";
import etcImg from "../../assets/etc-64x63.png";
import { match } from "ts-pattern";
import { StoreNode } from "../../redux/types";

const getMarkerImageSrc = (store: StoreNode): string => {
  return match<StoreNode, string>(store)
    .with({ storeType: "culture" }, () => cultureImg)
    .with({ storeType: "food" }, () => foodImg)
    .with({ storeType: "sleep" }, () => sleepImg)
    .otherwise(() => etcImg);
};

export { getMarkerImageSrc };
