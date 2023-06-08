import React from "react";
import "./navbar.scss";
import logoImg from "../../assets/logo2.png";
import { TfiSearch } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

function Navbar() {
  return (
    <nav className="Navbar" data-aos="fade-down">
      <div className="container nav-container flex items-center">
        <div className="nav-left flex items-center gap-x-8">
          <div className="nav-logo">
            <img src={logoImg} alt="logo" />
          </div>
          <ul className="link-group flex gap-x-2">
            <li>Home</li>
            <li>
              E-Bikes <AiOutlineDown />
            </li>
            <li>
              Accessories <AiOutlineDown />
            </li>
            <li>
              Dealer <AiOutlineDown />
            </li>
            <li>
              Support <AiOutlineDown />
            </li>
            <li>
              Help Center <AiOutlineDown />
            </li>
          </ul>
        </div>

        <div className="nav-right flex gap-x-1">
          <div className="search">
            <TfiSearch />
          </div>

          <div className="cart">
            <BsCartPlus />
          </div>

          <div className="account">
            <VscAccount />
          </div>

          <div className="sidebar-menu">
            <BiMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
