import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
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
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://i.etsystatic.com/20344761/r/il/20548d/3352483561/il_570xN.3352483561_1jgq.jpg"
          title="me"
        />
      </div>
    </div>
  );
};

export default Header;
