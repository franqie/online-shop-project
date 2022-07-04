import {FaFacebook, FaTwitter, FaInstagram, FaPhone} from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <h4>Contact :</h4>
            <div className="icons">
                <ul>
                    <li><FaPhone/></li>
                    <li><FaFacebook/></li>
                    <li> <FaTwitter/></li>
                    <li><FaInstagram/></li>
                </ul>                  
            </div>
        </div>
    </div>
  )
}

export default Footer;