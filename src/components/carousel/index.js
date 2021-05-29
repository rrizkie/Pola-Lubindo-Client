import React, { Component } from "react";
import Slider from "react-slick";
import useStyles from "./styles";

export default function SimpleSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };

  const classes = useStyles();
  return (
    <>
      <Slider {...settings} arrows={false}>
        <div style={{ margin: 15 }}>
          <img
            src="https://cms.sehatq.com/cdn-cgi/image/f=auto,width=480,fit=pad,background=white,quality=100/public/img/article_img/carrier-oil-teman-setia-minyak-atsiri-untuk-kesehatan-kulit-1615191167.jpg"
            className={classes.img}
          />
        </div>
        <div>
          <img
            src="https://cms.sehatq.com/cdn-cgi/image/f=auto,width=480,fit=pad,background=white,quality=100/public/img/article_img/carrier-oil-teman-setia-minyak-atsiri-untuk-kesehatan-kulit-1615191167.jpg"
            className={classes.img}
          />
        </div>
        <div>
          <img
            src="https://cms.sehatq.com/cdn-cgi/image/f=auto,width=480,fit=pad,background=white,quality=100/public/img/article_img/carrier-oil-teman-setia-minyak-atsiri-untuk-kesehatan-kulit-1615191167.jpg"
            className={classes.img}
          />
        </div>
      </Slider>
    </>
  );
}
