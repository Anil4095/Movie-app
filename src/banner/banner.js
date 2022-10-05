import React from "react";
import "./banner.css";
const Banner = () => {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        height: "300",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/pRrq1t1rBEELElYUA3B2eM3AXnP.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner_title">Bullet Train</h1>
        <h1 className="banner_description">
          It's been 29 years since someone lit the Black Flame Candle and
          resurrected the 17th-century sisters, and they are looking for
          revenge. Now it is up to three high-school students to stop the
          ravenous witches from wreaking a new kind of havoc on Salem before
          dawn on All Hallow's Eve.
        </h1>
      </div>
    </header>
  );
};
export default Banner;
