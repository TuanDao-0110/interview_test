import React, { useEffect } from "react";
import SeeMore from "../../component/button/SeeMore";
import style from "./list_product.module.css";
export default function List_Product() {
  let listProduct = [];
  const createListProduct = () => {
    for (let i = 0; i < 20; i++) {
      listProduct.push(
        <div className={style.product}>
          <div>
            <img src={require("./img/img-01.png")} alt="" width="100%" />
          </div>

          <div className={style.banner}>
            <p>[what happen] How to create </p>
            <div className={style.detail}>
              <p>2,500 won</p>

              <div className={style.pumpkin}>
                <i class="fa fa-heart"></i>
                <span>236</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return listProduct;
  };
  useEffect(() => {
    createListProduct();
  }, [listProduct]);
  return (
    <div style={{ marginBottom: "10vh" }}>
      <div className={style.list_product_bg}>{createListProduct()}</div>
      <SeeMore></SeeMore>
    </div>
  );
}
