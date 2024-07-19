import './index.css';
import { Input, InputGroup } from 'rsuite';
import { IoIosCart } from 'react-icons/io';
import SearchIcon from '@rsuite/icons/Search';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">K Shoe</div>
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
      <div className="cart">
        <IoIosCart />
      </div>
    </div>
  );
};

export default Header;
