const Navbar = ({ theme, setTheme }) => {
  return (
    <div className="navbar">
      <div className="nav-title">
        <h1>Theme Demo</h1>
      </div>
      <div className="nav-links">
        <div>
          <button className="btn-link">About</button>
        </div>
        <div>
          <button className="btn-link">Posts</button>
        </div>
        <div className="toggle-theme">
          <button onClick={setTheme} className="btn-theme">
            Switch to {theme === "lightTheme" ? "Dark mode" : "Light mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
