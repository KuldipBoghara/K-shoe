import { Carousel } from 'rsuite';
import './index.css';
import Image1 from '../../assets/barrett.png';
import Image2 from '../../assets/file.jpg';
import Image3 from '../../assets/mnz.jpg';

const ShoeCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel autoplay shape="bar" className="custom-carousel">
        <div className="carousel-item">
          <div className="carousel-content">
            <h3>Amazing Shoe</h3>
            <p>
              Experience the ultimate comfort and style with our new shoe
              collection.
            </p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
          <img src={Image1} alt="Shoe" className="background-image" />
        </div>

        <div className="carousel-item">
          <div className="carousel-content">
            <h3>Amazing Shoe</h3>
            <p>
              Experience the ultimate comfort and style with our new shoe
              collection.
            </p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
          <img src={Image2} alt="Shoe" className="background-image" />
        </div>

        <div className="carousel-item">
          <div className="carousel-content">
            <h3>Amazing Shoe</h3>
            <p>
              Experience the ultimate comfort and style with our new shoe
              collection.
            </p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
          <img src={Image3} alt="Shoe" className="background-image" />
        </div>
      </Carousel>
    </div>
  );
};

export default ShoeCarousel;
