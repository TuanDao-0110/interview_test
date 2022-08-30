import React from "react";
import style from "./footer.module.css";
export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_up}>
        <div className={style.up_left}>
          <h4>what happened</h4>
          <p>
            [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] 29CM 강남 스토어 영업 종료 [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] iOS 10 이하
            버전 지원 중단 안내 [공지] 개인 정보 처리 방침 변경 사전 안내
          </p>
        </div>
        <div className={style.up_right}>
          <table>
            <tr>
              <th>about us</th>
              <th>my order</th>
              <th>my account</th>
              <th>help</th>
            </tr>
            <tr>
              <td>회사 소개 상시 </td>
              <td>인재 채용 </td>
              <td>할인 혜택</td>
              <td>할인 혜택</td>
            </tr>
            <tr>
              <td>회사 소개 상시 </td>
              <td>인재 채용 </td>
              <td>할인 혜택</td>
              <td>할인 혜택</td>
            </tr>
            <tr>
              <td>할인 혜택</td>
              <td></td>
              <td>할인 혜택</td>
              <td></td>
            </tr>

            <tr></tr>
          </table>
        </div>
      </div>
      <div className={style.footer_bot}>
        <div className={style.bot_left}>
          © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr 서울특별시
          강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스 이용약관 l 개인정보처리방침
        </div>
        <div className={style.bot_right}>
          <img src={require("./img/n_logo.png")} alt="" />
          <img src={require("./img/f_logo.png")} alt="" />
          <img src={require("./img/y_logo.png")} alt="" />
        </div>
      </div>
    </div>
  );
}
