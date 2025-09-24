/** @jsxImportSource @emotion/react */
import * as s from "./style";

function Button({ children, onClick, variant = "default" }) {
  const style = variant === "blackText" ? s.blackTextButton : s.button;

  return (
    <button css={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
