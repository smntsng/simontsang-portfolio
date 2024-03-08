
import './header.css';
import logo from "../../assets/images/logo.png"

const Header = () => {
    return(
        <div className='logo'>
            <img src={logo} alt="simon tsang logo"></img>
        </div>
    )
}

export default Header;