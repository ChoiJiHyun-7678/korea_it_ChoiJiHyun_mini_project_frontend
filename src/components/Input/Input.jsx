function Input({ value, onChange, placeholder, type="text", style }) {
  return <input type={type} value={value} onChange={onChange} placeholder={placeholder} style={{ ...style, padding: "8px", margin: "5px" }} />;
}
export default Input;
