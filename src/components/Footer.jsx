import { ReactComponent as Logo} from "../assets/logo.svg"
import {ReactComponent as FbIcon} from "../assets/icon-facebook.svg"
import {ReactComponent as InstIcon} from "../assets/icon-instagram.svg"
import {ReactComponent as TwitterIcon} from "../assets/icon-twitter.svg"
import {ReactComponent as PinterestIcon} from "../assets/icon-pinterest.svg"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer__logo">
            <Logo style={{transform: "scale(1.375)"}} />
          </div>
          <nav className="footer__nav">
            <ul className="nav__list">
              <li className="nav__item"><a href="/">About</a></li>
              <li className="nav__item"><a href="/">Services</a></li>
              <li className="nav__item"><a href="/">Projects</a></li>
            </ul>
          </nav>
          <div className="footer__socials socials">
            <ul className="socials__list">
              <li className="socials__item">
                {/* <a href="/"><img src={fbIcon} alt="facebook" /></a> */}
                <a href="/"><FbIcon /></a>
              </li>
              <li className="socials__item">
                <a href="/"><InstIcon /></a>
              </li>
              <li className="socials__item">
                <a href="/"><TwitterIcon /></a>
              </li>
              <li className="socials__item">
                <a href="/"><PinterestIcon /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer