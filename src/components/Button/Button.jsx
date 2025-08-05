import "./styles.css";

function Button({
  buttonName = "Send",
  onClick = () => {},
  type = "button",
  children,
  color
}) {
  return (
    <button className="button_component" onClick={onClick} type={type} style={{backgroundColor: color}}>
      {/* {children ? "" : buttonName} */}
      {/* Улосвный рендеринг */}
      {!children && buttonName}
      {children}
    </button>
  );
}

export default Button;
