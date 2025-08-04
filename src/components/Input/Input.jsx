import "./styles.css";

function Input({ name, type = "text", placeholder = "", label = "" }) {
  return (
    <div className="input_wrapper">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className="input_component"
        name={name}
        type={type}
        placeholder={placeholder}
        id={name}
      />
    </div>
  );
}

export default Input;
