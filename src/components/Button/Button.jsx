function Button({ children, onClick, style }) {
  return <button onClick={onClick} style={{ ...style, padding: "8px", margin: "5px", cursor: "pointer" }}>
    {children}
  </button>;
}
export default Button;
