import { css } from "@emotion/react";

export const container = css`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const taskList = css`
  list-style: none;
  padding: 0;
  width: 60%;
`;

export const taskItem = css`
  margin: 8px 0;
  color: green;
  font-weight: bold;
`;
