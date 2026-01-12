import "../styles/Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Jun Sheng</h1>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
