import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


// Settings for the slider
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  
};

const SlideContent = ({ imgSrc, title, description, buttonLink }) => {
  return (
    <div className="relative flex justify-center items-center mb-10 " style={{ height: "600px" }} >
      {/* Image */}
      <img src="img/mercedes.jpg" alt="slider image" className="w-full h-full object-cover rounded-3xl" />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex justify-center items-center text-center text-white p-8 bg-black bg-opacity-50 rounded-lg">
        <div>
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-lg mb-4">{description}</p>
          <a href={buttonLink}>
            <button className="bg-transparent text-white px-6 py-2 rounded-full border border-white">
              View Details
            
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

const HomeSlider = () => {
  return (
    <div className="container mx-auto p-4 ">
      <Slider {...settings}>
        <SlideContent 
          imgSrc="img/mercedes.jpg" 
          title="Mercedes Benz"
          description="The best luxury car you can own."
          buttonLink="/mercedes"
        />
        <SlideContent 
          imgSrc="img/audi.jpg" 
          title="Audi A6" 
          description="Experience the Audi luxury and technology."
          buttonLink="/audi"
        />
        <SlideContent 
          imgSrc="img/bmw.jpg" 
          title="BMW X5"
          description="Powerful, efficient, and luxurious."
          buttonLink="/bmw"
        />
      </Slider>
    </div>
  );
};

export default HomeSlider;
