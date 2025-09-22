/** @jsxImportSource @emotion/react */
function Button({ children, onClick, style }) {
  return (
    <button
      onClick={onClick}
      css={{
        padding: "8px 12px",
        margin: "5px",
        cursor: "pointer",
        borderRadius: "4px",
        border: "1px solid #333",
        backgroundColor: "#fff",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
export default Button;
