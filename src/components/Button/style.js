// src/components/Button/style.js
import { css } from "@emotion/react";

export const button = css`
  width: 100%;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  background-color: #444; /* 진한 그레이 */
  color: white; /* 기본 글씨는 흰색 */

  &:hover {
    background-color: #989898;
  }
`;

export const blackTextButton = css`
  ${button};
  background-color: red; /* 배경 흰색 */
  color: black; /* 글자 검정색 */
  border: 1px solid #ccc; /* 구분되게 테두리 */
`;