import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    return (
        <nav>
          <h1 className="logo">Blooger</h1>  
          <ul className="option">
              <li>Home</li>
              <li>category</li>
              <li>Archive</li>
              <li>Pages</li>
          </ul>
           
         <ul className="social-container">
             <li>  <a
          href="https://www.youtube.com/c/jamesqquick"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a></li>
             <li>  <a
          href="https://www.facebook.com/learnbuildteach/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a></li>
             <li>

        <a href="https://www.twitter.com/jamesqquick" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
             </li>
             <li> <a
          href="https://www.instagram.com/learnbuildteach"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a></li>
         </ul>
                 
        </nav>
    )
}

export default Navbar

