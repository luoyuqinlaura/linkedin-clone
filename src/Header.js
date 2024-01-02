import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from './HeaderOption';

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

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
      </div>
    </div>
  );
};

export default Header;
