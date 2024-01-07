import { Outlet } from "react-router-dom";
// componenets
import Navbar from "../components/Navbar";
import Footer from "../components/Pgineshin";

function MainLayout() {
  return (
    <div className="flex  flex-col h-[100vh]">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
