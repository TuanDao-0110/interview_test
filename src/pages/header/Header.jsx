/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "./header.module.css";
export default function header() {
  let rightInfor = ["introduction", "solution", "plan", "rectangle", "login", "apply"];
  return (
    <div className={style.box}>
      <div style={{ gridColumn: 0 / 2 }}>
        <img className={style.logo} src={require("../../img/logo.png")} alt="logo"></img>
      </div>
      <div style={{ gridColumn: 3 }}>
        <ul style={{ display: "flex", listStyleType: "none", gap: "10px" }}>
          {rightInfor.map((item, index) => {
            return (
              <li key={index} className={style[item]}>
                <a href="#" style={{ textDecoration: "none" }}>
                  {item === "plan" ? "rate " : ""}
                  {item === "rectangle" ? "" : item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
