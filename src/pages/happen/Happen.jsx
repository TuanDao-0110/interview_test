import React from "react";
import SeeMore from "../../component/button/SeeMore";
import style from "./happen.module.css";
export default function Happen() {
  return (
    <div className={style.happen_bg}>
      <div className={style.header}>
        <h2>what happened</h2>
        <p>How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos Can be trimmed. Take the first </p>
        <SeeMore />
      </div>

      <img src={require("./img/drink_logo.png")} className={style.drink} alt="" />
      <img src={require("./img/h_logo.png")} className={style.h_logo_black} alt="" />
      <img src={require("./img/h_logo_red.png")} className={style.h_logo_red} alt="" />
      <div className={style.w_logo}>
        <p>w</p>
      </div>
      <img src={require("./img/heart.png")} className={style.heart} alt="" />
      <img src={require("./img/dot_logo_right.png")} className={style.dot_logo} alt="" />
      <img src={require("./img/girl_logo_right.png")} className={style.girl_logo_right} alt="" />
      <img src={require("./img/video.png")} className={style.video} alt="" />
      <img src={require("./img/error_logo.png")} className={style.error_logo} alt="" />
      <img src={require("./img/mouse.png")} className={style.mouse_logo} alt="" />
    </div>
  );
}
