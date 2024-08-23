import React from "react";
import "./header.scss";
import headerLogoImg from "../../assets/logo/header-logo.jpg";
import categoryApi from "../../categoryApi/categoryApi";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { CiHeart, CiUser } from "react-icons/ci";
import Marquee from "react-fast-marquee";

const category = categoryApi;
function Header() {
  return (
    <>
      <div className="topbar">
        <Marquee>
          <span>Welcome To Icon Car Accessories. Shop With Us Online</span>
          <span>Equip your car, conquer the streets</span>
        </Marquee>
      </div>
      <header>
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
                    <Link to={item.path}>{item.category}</Link>
                    <div className="header-menu-border-bottom"></div>
                  </div>
                );
              })}
            </div>
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
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
