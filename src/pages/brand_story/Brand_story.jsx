import React from "react";
import SeeMore from "../../component/button/SeeMore";
import style from "./brand_story.module.css";
export default function brand_story() {
  return (
    <div >
      <div className={style.brand_bg}>
        <div className={style.brand}>
          <h2>brand story</h2>
          <p className={style.info}>
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
            걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </p>
        </div>
        <div className={style.brand_detail}>
          <div className={style.line}></div>
          <div className={style.details}>
            <div className={style.left}></div>
            <div className={style.right}>
              <h3>what happened's brand story</h3>
              <p>
                청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
                살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
                칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.{" "}
              </p>
              <SeeMore></SeeMore>
            </div>
          </div>
        </div>
        <div className={style.book}>
          <img src={require("./img/book.png")} alt="" />
        </div>

        <div className={style.flower}>
          <img src={require("./img/flower.png")} alt="" />
        </div>
        <div className={style.calender}>
          <img src={require("./img/calender.png")} alt="" />
        </div>
        <div className={style.white_form}>
          <img src={require("./img/whiteform.png")} alt="" />
        </div>

        <div className={style.name_in}>
          <img src={require("./img/namein.png")} alt="" />
        </div>
        <div className={style.plan}>
          <img src={require("./img/plan.png")} alt="" />
        </div>
      </div>
    </div>
  );
}
