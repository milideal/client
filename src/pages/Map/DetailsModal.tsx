import locationImage from "../../assets/MapView/location.svg";
import phoneIcon from "../../assets/MapView/phone.svg";
import websiteIcon from "../../assets/MapView/website.svg";
import descriptionIcon from "../../assets/MapView/description.svg";
import closeIcon from "../../assets/MapView/close.svg";

import "./DetailsModal.css";
import { useAppDispatch, useAppSelect } from "../../redux/configStore.hooks";
import { setSelectedNode } from "../../redux/features/nodeData";

function DetailsModal({ className }: { className?: string }) {
  const dispatch = useAppDispatch();
  const { selected } = useAppSelect((state) => state.nodeData);

  if (!selected) return <div></div>;

  const homepageUrl = selected.homepage ? new URL(selected.homepage) : null;
  return (
    <div
      className={`DetailsModal w(341) p(29) r(18) vbox gap(16) box-shadow(0/20/40/#000.25) NanumGothic ${
        className || ""
      }`}
    >
      <div className="heading text(center) bold">
        <div className="c(#999) font-size(14)">{selected.storeType}</div>
        <div className="font-size(24)">{selected.name}</div>
      </div>

      <div className="info vbox gap(5) font-size(14)">
        <div className="hbox gap(12)">
          <div className="icon">
            <img src={locationImage} />
          </div>
          <div className="text">{selected.address}</div>
        </div>
        <div className="phone hbox gap(12)">
          <div className="icon">
            <img src={phoneIcon} />
          </div>
          <div className="text">
            {selected.tel && (
              <a href={`tel:${selected.tel}`} className="link">
                {selected.tel}
              </a>
            )}
          </div>
        </div>
        {selected.promotion && (
          <div className="desc hbox(top) gap(12)">
            <div className="icon descriptionIcon">
              <img src={descriptionIcon} />
            </div>
            <div className="text">{selected.promotion}</div>
          </div>
        )}
        {homepageUrl && (
          <div className="site desc hbox gap(12)">
            <div className="icon">
              <img src={websiteIcon} />
            </div>
            <div className="text">
              <a
                href={`${selected.homepage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                {homepageUrl?.hostname}
              </a>
            </div>
          </div>
        )}
      </div>

      <div
        className="close-btn absolute right(14) top(16) cursor"
        onClick={() => {
          window.history.replaceState(
            {},
            "",
            `${location.origin}/map?x=${selected.coord.x}&y=${selected.coord.y}`
          );
          dispatch(setSelectedNode({ value: null }));
        }}
      >
        <img src={closeIcon} alt="Close Button" />
      </div>
    </div>
  );
}

export default DetailsModal;
