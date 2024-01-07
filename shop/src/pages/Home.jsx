// components
import Carusel from "../components/Carusel";
import Boy from "../components/Boy";
import Girl from "../components/Girl";
import DuoCarusel from "../components/DuoCarusel";
import FooterInfo from "../components/FooterInfo";
import Kasmetica from "../components/Kasmetica";
import ShopInfo from "../components/ShopInfo";

function Home() {
  return (
    <div>
      <div className="max-w-6xl max-lg:mx-4 mx-auto">
        <Carusel />
        <Boy />
        <Girl />
        <Boy />
        <Girl />
        <DuoCarusel />
        <ShopInfo />
      </div>
      <FooterInfo />
    </div>
  );
}

export default Home;
