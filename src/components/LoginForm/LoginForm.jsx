import "./styles.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login submitted!");
  };

  return (
    <form className="login_form" onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
      />
      <Input
        name="password"
        type="password"
        placeholder="Enter your password"
        label="Password"
      />
      <Button type="submit" buttonName="Login" />
    </form>
  );
}

export default LoginForm;
