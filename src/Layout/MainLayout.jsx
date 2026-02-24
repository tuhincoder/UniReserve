/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Navbar from "../component/utils/Shared/Navbar/Navbar";
import TopNavbar from "../component/TopNavbar";

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
      {/* 1. TopNavbar: Mobile-e thakbe, Desktop-e scroll korle hide hobe */}
      <TopNavbar />

      {/* 2. Main Navbar: Eti sticky thakbe ebong z-index sobar upore thakbe */}
      <Navbar />

      {/* 3. Main Content: Banner ebong onno shob ekhane thakbe */}
      <main className="relative">{children}</main>

      {/* Footer ekhane thakte pare */}
    </div>
  );
};

export default MainLayout;
