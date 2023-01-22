const Button = () => {
  const isLogin = false;
  const login = "login";
  return <button>{isLogin ? login : "logout"}</button>;
};
export default Button;
