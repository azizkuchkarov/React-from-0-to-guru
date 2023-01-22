const Header = () => {
  const text = "Hello World Aziz";
  const getText = (text) => {
    return (
      <div>
        <h1>Hello {text}</h1>
        <p>Lorem ipsum dolor sit</p>
      </div>
    );
  };
  return <div>{getText("Gaui")}</div>;
};
export default Header;
