import React from "react";
import SeeMore from "../../component/button/SeeMore";
import style from "./issue.module.css";
export default function Issue() {
  return (
    <div className={style.issue_bg}>
      <div className={style.header}>
        <h2>Happened’s issue</h2>
        <p>
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을
          내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
        <SeeMore></SeeMore>
      </div>
      <div className={style.footer}>
        <div className={style.item_1}>
          <h3>WHPN</h3>
          <h3>issue</h3>
          <img src={require("./img/arrow.png")} alt="" />
          <img className={style.coin} src={require("./img/coin_logo.png")} alt="" />
        </div>
        <div className={style.item_2}>
          <p>b brand</p>
        </div>
        <div className={style.item_3}>
          <img src={require("./img/issue_picture_2.png")} alt="" />
        </div>
        <div className={style.item_4}>
          <p>b brand</p>
        </div>
        <div className={style.item_5}>
          <img src={require("./img/issue_picture_1.png")} alt="" />
          <img src={require("./img/lol.png")} className={style.lol} alt="" width="10px" height="10px" />
        </div>
        <div className={style.item_6}>
          <p>C brand</p>
        </div>
        <div className={style.item_7}>
          <img src={require("./img/issue_picture_3.png")} alt="" />
        </div>
      </div>
      <div className={style.dive_1}>
        <img src={require("./img/dice_1.png")} alt="" />
      </div>
      <div className={style.dive_2}>
        <img src={require("./img/dice_2.png")} alt="" />
      </div>
    </div>
  );
}
