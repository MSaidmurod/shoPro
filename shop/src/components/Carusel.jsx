//react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// react icon
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";

function SampleNextArrow({ onClick }) {
  return (
    <div
      className="absolute max-lg:hidden hover:text-white text-indigo-600 bg-white hover:bg-indigo-600 text-xl cursor-pointer text-center right-0  w-[40px] flex items-center shadow-lg justify-center rounded-[50%] h-[40px] bottom-28"
      onClick={onClick}
    >
      <IoMdArrowRoundForward />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="absolute max-lg:hidden hover:text-white text-indigo-600 bg-white hover:bg-indigo-600 text-xl cursor-pointer text-center bottom-28  w-[40px] h-[40px] shadow-lg rounded-[50%] z-20 flex items-center justify-center left-0"
      onClick={onClick}
    >
      <IoMdArrowRoundBack />
    </div>
  );
}

function Carusel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="mt-10 max-md:h-[120px]  rounded-xl overflow-hidden">
      <Slider {...settings}>
        <div>
          <img
            className="object-cover max-md:h-[120px] w-full"
            src="https://media.bulavka.uz/products/JG21E2NM08/JG21E2NM08?version=1702966275012"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover max-md:h-[120px] w-full"
            src="https://media.bulavka.uz/products/2aj9houvfo/2aj9houvfo?version=1702552550271"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover max-md:h-[120px] w-full"
            src="https://media.bulavka.uz/products/GlIt9xFsm5/GlIt9xFsm5?version=1702552562150"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover max-md:h-[120px] w-full"
            src="https://media.bulavka.uz/products/S4wKvNJ2Qs/S4wKvNJ2Qs?version=1702552572155"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover max-md:h-[120px] w-full"
            src="https://media.bulavka.uz/products/PRJgCAq0uW/PRJgCAq0uW?version=1702552585854"
            alt=""
          />
        </div>
        <div>
          <img
            className="object-cover max-md:h-[120px] w-full"
            src="https://media.bulavka.uz/products/qPzLWHbSuK/qPzLWHbSuK?version=1702552599417"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carusel;
