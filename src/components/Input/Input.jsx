/** @jsxImportSource @emotion/react */
function Input({ value, onChange, placeholder, type = "text", style }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      css={{
        padding: "8px",
        margin: "5px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        ...style,
      }}
    />
  );
}
export default Input;
