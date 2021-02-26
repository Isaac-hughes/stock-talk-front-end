import '../App.css';


const LogoutButton = ({setIsAuthenticated}) => {
    
    const handleClick = () => {
        localStorage.clear()
        setIsAuthenticated(false)
    }

  return (
    <div className="logoutButton">
      <button onClick={handleClick}>Log out</button>
    </div>
  );
}

export default LogoutButton;