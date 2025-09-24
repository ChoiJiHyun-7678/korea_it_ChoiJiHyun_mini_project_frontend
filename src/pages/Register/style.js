import { css } from "@emotion/react";

export const container = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const title = css`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: black;  
`;

export const input = css`
  width: 300px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export const buttonContainer = css`
  display: flex;
  gap: 1rem;
`;

export const primaryButton = css`
  flex: 1;
  padding: 0.7rem;
  font-size: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const secondaryButton = css`
  flex: 1;
  padding: 0.7rem;
  font-size: 1rem;
  background-color: #333; /* 진한 그레이 */
  color: white; /* 글자 흰색 */
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;
