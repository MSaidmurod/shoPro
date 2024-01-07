//react icon
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoYoutube } from "react-icons/io5";

function FooterInfo() {
  return (
    <div className="bg-indigo-200">
      <div className="max-w-6xl mx-auto mt-10 py-10">
        <div className="flex max-md:flex-col mb-4 max-md:mx-4 max-md:gap-4 justify-between">
          <div className="flex flex-col ">
            <p>Есть вопросы? Звоните:</p>
            <p>+998 xx xxx xx xx</p>
            <p>Режим работы: 09:00</p>
            <p>Почта: ms@gmail.com</p>
          </div>
          <div className="flex flex-col">
            <p>O компании</p>
            <a className="font-bold cursor-pointer hover:text-slate-600">
              O нас
            </a>
            <a className="font-bold cursor-pointer hover:text-slate-600">
              Контакты
            </a>
            <a className="font-bold cursor-pointer hover:text-slate-600">
              Публичная оферта
            </a>
          </div>
          <div className="flex flex-col">
            <p>Помощь</p>
            <a className="font-bold cursor-pointer hover:text-slate-600">
              Как оформить заказ
            </a>
            <a className="font-bold cursor-pointer hover:text-slate-600">
              Способы оплаты
            </a>
            <a className="font-bold cursor-pointer hover:text-slate-600">
              Услуга примерки
            </a>
            <a className="font-bold cursor-pointer hover:text-slate-600">
              Услуга примерки
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">
              Следите за акциями, скидками и новинками:
            </h1>
            <div className="flex cursor-pointer gap-3">
              <FaTelegramPlane className="text-3xl hover:text-indigo-300" />
              <FaFacebookF className="text-3xl hover:text-indigo-300" />
              <PiInstagramLogoFill className="text-3xl hover:text-indigo-300" />
              <IoLogoYoutube className="text-3xl hover:text-indigo-300" />
            </div>
          </div>
        </div>
        <div className="max-md:mx-4">
          <h1>Всегда для вас:</h1>
          <ul>
            <li>скидки до –50% каждый день;</li>
            <li>примерка до 10 товаров в Ташкенте;</li>
            <li>более 2 000 брендов в каталоге;</li>
            <li>оплата наличными или через платежные системы:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterInfo;
