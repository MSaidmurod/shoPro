// react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// icon
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";

function SampleNextArrow({ onClick }) {
  return (
    <div
      className="absolute max-lg:hidden hover:text-white text-indigo-600 bg-white hover:bg-indigo-600 text-xl cursor-pointer text-center right-0  w-[40px] flex items-center shadow-lg justify-center rounded-[50%] h-[40px] bottom-36"
      onClick={onClick}
    >
      <IoMdArrowRoundForward />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="absolute max-lg:hidden hover:text-white text-indigo-600 bg-white hover:bg-indigo-600 text-xl cursor-pointer text-center bottom-36  w-[40px] h-[40px] shadow-lg rounded-[50%] z-20 flex items-center justify-center left-0"
      onClick={onClick}
    >
      <IoMdArrowRoundBack />
    </div>
  );
}

function Kasmetica() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 6,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          dots: false,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className=" max-md:mx-4 hidden max-md:block">
      <div className="relative    cursor-pointer">
        <Slider {...settings}>
          <div className="">
            <img
              className="border w-[110px] mx-auto"
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="text-center">
              <h1>32 000 so'm</h1>
              <h1>Hello World</h1>
            </div>
          </div>
          <div className="">
            <img
              className="border w-[110px] mx-auto"
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="text-center">
              <h1>32 000 so'm</h1>
              <h1>Hello World</h1>
            </div>
          </div>
          <div className="">
            <img
              className="border w-[110px] mx-auto"
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="text-center">
              <h1>32 000 so'm</h1>
              <h1>Hello World</h1>
            </div>
          </div>
          <div className="">
            <img
              className="border w-[110px] mx-auto"
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="text-center">
              <h1>32 000 so'm</h1>
              <h1>Hello World</h1>
            </div>
          </div>
          <div className="">
            <img
              className="border w-[110px] mx-auto"
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="text-center">
              <h1>32 000 so'm</h1>
              <h1>Hello World</h1>
            </div>
          </div>
          <div className="">
            <img
              className="border w-[110px] mx-auto"
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="text-center">
              <h1>32 000 so'm</h1>
              <h1>Hello World</h1>
            </div>
          </div>
          <div className="">
            <img
              className="border w-[110px] mx-auto"
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="text-center">
              <h1>32 000 so'm</h1>
              <h1>Hello World</h1>
            </div>
          </div>
          <div className="">
            <img
              className="border w-[110px] mx-auto"
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="text-center">
              <h1>32 000 so'm</h1>
              <h1>Hello World</h1>
            </div>
          </div>
          <div className="">
            <img
              className="border w-[110px] mx-auto"
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="text-center">
              <h1>32 000 so'm</h1>
              <h1>Hello World</h1>
            </div>
          </div>
          <div className="">
            <img
              className="border w-[110px] mx-auto"
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="text-center">
              <h1>32 000 so'm</h1>
              <h1>Hello World</h1>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Kasmetica;
