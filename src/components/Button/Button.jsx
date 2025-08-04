import "./styles.css";

function Button({
  buttonName = "Send",
  onClick = () => {},
  type = "button",
  children,
}) {
  return (
    <button className="button_component" onClick={onClick} type={type}>
      {/* {children ? "" : buttonName} */}
      {/* Улосвный рендеринг */}
      {!children && buttonName}
      {children}
    </button>
  );
}

export default Button;
