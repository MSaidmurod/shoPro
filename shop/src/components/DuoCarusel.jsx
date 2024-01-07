//react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// react icon
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from "react-icons/io";
// components
import Kasmetica from "../components/Kasmetica";

function SampleNextArrow({ onClick }) {
  return (
    <div
      className="absolute max-lg:hidden hover:text-white text-indigo-600 bg-white hover:bg-indigo-600 text-xl cursor-pointer text-center right-0  w-[40px] flex items-center shadow-xl justify-center rounded-[50%] h-[40px] border bottom-[220px]"
      onClick={onClick}
    >
      <IoMdArrowRoundForward />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="absolute max-lg:hidden hover:text-white text-indigo-600 bg-white hover:bg-indigo-600 text-xl cursor-pointer text-center bottom-[220px]  w-[40px] h-[40px] shadow-xl rounded-[50%] z-20 flex items-center border justify-center left-0"
      onClick={onClick}
    >
      <IoMdArrowRoundBack />
    </div>
  );
}

function DuoCarusel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="my-10">
      <h2 className="text-xl font-bold pb-3 ">Aralash</h2>
      <div className="max-md:hidden   ">
        <Slider {...settings}>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
          <div className="">
            <img
              className="w-[130px] border mt-10 mx-auto "
              src="https://media2.bulavka.uz/QKNlRzjulNbh_vf5mspkqgDnSzU=/fit-in/220x260/products/ojGershCBh/input.jpeg"
              alt=""
            />
            <div className="ml-4">
              <h1>32 000 so'm</h1>
              <h1>Hello </h1>
            </div>
          </div>
        </Slider>
      </div>
      <Kasmetica />
    </div>
  );
}

export default DuoCarusel;
