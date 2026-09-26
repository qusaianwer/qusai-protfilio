import logo from "../photo/photo_2026-09-23_21-24-46.jpg";

function Navbar(){
    return(
      <nav className="navbar">
        <div className="logo-group">
        <img src={logo} alt="" className="logo-img" />
        <h2 className="logo">Qusai</h2>
        </div>
        <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">My project</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
}
export default Navbar;