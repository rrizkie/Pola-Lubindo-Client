import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export const Loading = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/loading.json"),
    });
  }, []);
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <div
        className="container"
        ref={container}
      ></div>
    </div>
  );
};
