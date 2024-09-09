import React, { useState } from "react";
import "./header.scss";
import headerLogoImg from "../../assets/logo/header-logo.jpg";
import categoryApi from "../../categoryApi/categoryApi";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { CiHeart, CiUser } from "react-icons/ci";
import Marquee from "react-fast-marquee";
import { FaCaretDown } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const category = categoryApi;
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <>
      
      <header>
        <div className={`sidenav ${isNavOpen ? "open" : ""}`}>
          <div className="closebtn" onClick={closeNav}>
            &times;
          </div>
          <Link className="menu-item" to={"/"}>
            Home
          </Link>
          <div className="menu-item category" onClick={toggleDropdown}>
            Category
            <FaCaretDown />
          </div>
          <div className={`dropdown-category ${dropdownOpen ? "open" : ""}`}>
            {category.map((item, index) => {
              return (
                <Link to={item.path} key={index} onClick={closeNav}>
                  {item.category}
                </Link>
              );
            })}
          </div>
          <Link className="menu-item" to={"/shop"} onClick={closeNav}>
            Shop
          </Link>
          <Link className="menu-item" to={"/profile"} onClick={closeNav}>
            Profile{" "}
          </Link>
        </div>
        <div className="container" style={{ height: "100%" }}>
          <div className="full-header">
            <div className="logo">
              <Link to={"/"}>
                <img alt="logo" src={headerLogoImg} width="100%" />
              </Link>
            </div>
            <div className="header-searchbar">
              <input type="text" placeholder="Search" />
            </div>
            <div className="accessories">
              {category.map((item, index) => {
                return (
                  <div className="header-menu" key={index}>
                    <Link to={item.path}>
                      <div className="header-menu-item">
                        {item.category}
                        <IoIosArrowDown className="header-menu-down-icon" />
                      </div>
                      <div className="header-menu-sub-itmes">
                        {item.product.map((subItem, index) => {
                          return (
                            <Link to={subItem.path} key={index}>
                              {subItem.productcategory}
                            </Link>
                          );
                        })}
                      </div>
                    </Link>
                    <div className="header-menu-border-bottom"></div>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="add-to-cart">
                <a>
                  <CiHeart className="icon" />
                </a>
                <a>
                  <BsCartPlus className="icon" />
                </a>
                <Link to={"/signup"}>
                  <CiUser className="icon" />
                </Link>
              </div>
              <div className="mobile-menu">
                <IoMenuOutline className="icon" onClick={openNav} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
