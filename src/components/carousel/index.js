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
            src="https://s3-ap-southeast-1.amazonaws.com/assets.segari.id/banners/Web-Banner_Sehat-Bersama-Segari.png"
            className={classes.img}
          />
        </div>
        <div>
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/assets.segari.id/banners/Web-Banner_Sehat-Bersama-Segari.png"
            className={classes.img}
          />
        </div>
        <div>
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/assets.segari.id/banners/Web-Banner_Sehat-Bersama-Segari.png"
            className={classes.img}
          />
        </div>
      </Slider>
    </>
  );
}
