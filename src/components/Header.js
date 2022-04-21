import './Header.css';

function Header() {
  return (
    <>
      <header className="Header_Body">
        <div className="Header_Home">
        <img 
          className="Header_Logo"
          src='./company_logo.png' 
          alt='company_logo' />
        <h3 className="Header_Company">My Company</h3>
        </div>
        <div className="Header_MenuItems">Menu 1</div>
        <div className="Header_MenuItems">Menu 2</div>
        <div className="Header_MenuItems">Menu 3</div>
        <button className="Header_Login">Login</button>
      </header>
    </>
  );
};

export default Header;