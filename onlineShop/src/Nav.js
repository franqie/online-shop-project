import { Link } from 'react-router-dom';
import {FaCartPlus} from 'react-icons/fa';
import logo from './images/E0O8dM01.svg';
import Modal from './Modal';
import { useGlobalContext } from './context';



const Nav = ()=>{
    const {showModal,cartCount,cart} = useGlobalContext();

    return(
        <nav className="navbar" id="top">
            {showModal && <div><Modal/></div>}
            <div className="nav-content">
                <figure className="logo" >
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>               
                </figure>
                <div className="nav-right">
                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </div>
                    <div className="cart-box">
                        <Link to="/cart"><FaCartPlus className="cart"/></Link>
                        <div className={`${cart.length > 0 ? "total show" : "total"}`}>{cartCount}</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Nav;