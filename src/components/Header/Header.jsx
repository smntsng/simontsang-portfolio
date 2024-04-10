
import './header.css';
import logo from "../../assets/images/logo.png"

const Header = () => {
    return(
        <div className='logo'>
             <a href="https://simontsang-portfolio.netlify.app/">
            <img src={logo} alt="simon tsang logo"></img>
            </a>
        </div>
    )
}

export default Header;