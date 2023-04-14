import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Header = () => {
  return (
    <div className="header">
  
      <div className="logo">
        <Link className="logoLink">
          <span>
            <em>Teófila</em>
          </span>
        </Link>
      </div>
      <div className="menu">
        <div className="category-title">
          <span>NEW IN</span>
        </div>
        <div className="category-title">
          <span>SHOP BY</span>
        </div>
        <div className="category-title">
          <span>SALE</span>
        </div>
      </div>
      <div className="header-right">
        <SearchOutlinedIcon className="logo-left" />
        <PersonOutlineOutlinedIcon className="logo-left" />
        <FavoriteBorderOutlinedIcon className="logo-left" />
        <LocalMallOutlinedIcon className="logo-left" />
      </div>
    </div>
  );
};

export default Header;
