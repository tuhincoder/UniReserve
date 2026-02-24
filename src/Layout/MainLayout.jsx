/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Navbar from "../component/utils/Shared/Navbar/Navbar";
import TopNavbar from "../component/TopNavbar";
import ScrollToTop from "../component/ScrollToTop";

const MainLayout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 20px niche scroll korle state update hobe
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop></ScrollToTop>
      <TopNavbar />

      <Navbar />

      <main className="relative">{children}</main>
    </div>
  );
};

export default MainLayout;
