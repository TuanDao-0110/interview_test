import React from "react";
import style from "./list_product.module.css";
export default function List_Product() {
  let listProduct = [];
  return (
    <div>
      <div className={style.list_product_bg}>
        <div className={style.product}></div>
        <div className={style.product}>
          <div style={{ width: "300px", height: "300px", background: `blue` }}>
            <img src={require("./img/img-01.png")} alt="" width={"300px"} height={"300px"} />
          </div>

          <div className={style.banner}>
            <p>[what happen] How to create </p>
            <div>
              <p>2,500 won</p>
              <div>
                <div className={style.pumpkin}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.product}></div>
        <div className={style.product}></div>
        <div className={style.product}></div>
        <div className={style.product}></div>
        <div className={style.product}></div>
        <div className={style.product}></div>
        <div className={style.product}></div>
        <div className={style.product}></div>
      </div>
    </div>
  );
}
