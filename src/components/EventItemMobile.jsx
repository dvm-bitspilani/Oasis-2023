import React from "react";
import Image from "next/image";
import * as events from "./eventsmobile.module.css";
import Item from "../../public/static/images/StreetDance.png";
import scrollAsset from "../../public/static/images/EventItem.png";

const EventItem = ({ name, desc, image, top, left }) => {
  return (
    <>
      <div className={events.itemContainer} style={{top: top, left: left}} suppressHydrationWarning>
        <div className={events.itemImage}>
        <Image draggable={false} src={image} alt="Street Dance"></Image>
        </div>
        <div className={events.itemContent}>
          <h2>{name}</h2>
          {/* <p>
            {desc}
          </p> */}
        </div>
      </div>
      {/* <div className={events.itemData}>
          <Image draggable={false} alt="" src={scrollAsset} height={1200} width={840} />
      </div> */}
    </>
  );
};

export default EventItem;