import { css } from "@emotion/react";

export const container = css`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const inputContainer = css`
  display: flex;
  gap: 10px;
  margin-bottom: 19px;
`;

export const taskList = css`
  list-style: none;
  padding: 0;
  width: 60%;
`;

export const taskItem = (completed) => css`
  margin: 8px 0;
  display: flex;
  align-items: center;
  text-decoration: ${completed ? "line-through" : "none"};
`;
