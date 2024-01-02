import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.svgviewer.dev/static-svgs/495625/linkedin.svg"
          alt=""
        />
        <div className="header__search">
          {/* SearchIcon */}
          <SearchIcon />
          <input type="text"></input>
        </div>
      </div>
      <div className="header__right"></div>
    </div>
  );
};

export default Header;
