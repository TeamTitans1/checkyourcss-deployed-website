import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[100px]" />
    </nav>
  );
}

export default Navbar;
