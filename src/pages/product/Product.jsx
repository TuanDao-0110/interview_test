import React from "react";
import style from "./product.module.css";
export default function Product() {
  let product = [1, 2, 3];
  return (
    <div className={style.product_bg}>
      <h2>Best product</h2>
      <p className={style.discription}>
        How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos Can be trimmed. Take the first{" "}
      </p>
      <div>
        <div className={style.product}>
          {product.map((item, index) => {
            return (
              <div key={index} style={{ position: "relative" }}>
                <img src={require(`./sticker/product_${item}.png`)} alt="" />
                <div className={style.product_number}> {item}</div>
                <div className={style.box}>
                  <p>How to create mobile-optimized</p>
                  <img src={require("./sticker/go-icon.png")} alt="" width={"60px"} height={"60px"} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
