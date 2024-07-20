import './index.css';
import { IconButton, Input, InputGroup } from 'rsuite';
import { IoIosCart } from 'react-icons/io';
import SearchIcon from '@rsuite/icons/Search';
import { RiUser3Fill } from 'react-icons/ri';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">KM Shoes</div>
      <div className="search-bar">
        <InputGroup inside>
          <Input placeholder="Search here" />
          <InputGroup.Addon>
            <SearchIcon />
          </InputGroup.Addon>
        </InputGroup>
      </div>
      <div className="menu">
        <div>Our Products</div>
        <div>Collections</div>
        <div>Why Us</div>
      </div>
      <div className="signin_button">
        <IconButton icon={<RiUser3Fill />}>
          <span className="icon-text">SignIn</span>
        </IconButton>
      </div>

      <div className="cart">
        <IoIosCart />
      </div>
    </div>
  );
};

export default Header;
