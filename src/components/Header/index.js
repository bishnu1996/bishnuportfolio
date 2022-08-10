import "./style.css";
import logo from "../../assets/image/logo.gif";
// import menu from "../../assets/image/menu.png";
const Header = () => {
  return (
    <section className="app-header">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <div className="menu">
        {/* <img src={menu} alt="menu" className="menu-image" /> */}
        <span className="material-symbols-outlined menu-material">menu</span>
      </div>
    </section>
  );
};
export default Header;
