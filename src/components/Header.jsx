import { useState } from "react";
import {ReactComponent as Logo} from "../assets/logo.svg"
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="header">
    <div className="container">
      <nav className="header__nav">
        <div className="nav__brand">
          <a className="brand__link" href="/">
            {/* <img src={logo} alt="sunnyside" /> */}
            <Logo />
          </a>
        </div>
        <div className={"header__burger"} onClick={() => setOpen(!open)}>
          <GiHamburgerMenu />
        </div>
        <ul 
          className={open ? "nav__list showBurger" : "nav__list" }
        >
          <li className="nav__item ">
            <a className="nav__link" href="/">About</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">Services</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">Projects</a>
          </li>
          <li className="nav__item nav__item_round">
            <a className="nav__link" href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default Header