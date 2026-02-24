import { Link } from "react-router-dom";
import footerLogo from "../../../../assets/images/navLogo.jpg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#890c25] text-white pt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
        {/* Brand Section */}
        <div className="space-y-6 text-left">
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-2xl bg-white p-1"
              src={footerLogo}
              alt="UnisReserve Logo"
            />
            <span className="text-2xl font-black uppercase tracking-tighter">
              UnisReserve
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            Empowering students to find their dream colleges with ease.
            Providing high-quality resources and a seamless admission
            experience.
          </p>
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#890c25] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-left">
          <h6 className="text-xl font-bold mb-6 relative inline-block">
            Services
            <span className="absolute -bottom-2 left-0 w-10 h-1 bg-white/30 rounded-full"></span>
          </h6>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a className="hover:text-white hover:translate-x-2 transition-all inline-block cursor-pointer">
                College Selection
              </a>
            </li>
            <li>
              <a className="hover:text-white hover:translate-x-2 transition-all inline-block cursor-pointer">
                Admission Support
              </a>
            </li>
            <li>
              <a className="hover:text-white hover:translate-x-2 transition-all inline-block cursor-pointer">
                Research Papers
              </a>
            </li>
            <li>
              <a className="hover:text-white hover:translate-x-2 transition-all inline-block cursor-pointer">
                Scholarships
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-left">
          <h6 className="text-xl font-bold mb-6 relative inline-block">
            Contact Us
            <span className="absolute -bottom-2 left-0 w-10 h-1 bg-white/30 rounded-full"></span>
          </h6>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <MdLocationOn className="text-2xl text-white/60" />
              <span className="text-sm">
                123 University Ave, Dhaka, Bangladesh
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MdPhone className="text-xl text-white/60" />
              <span className="text-sm">+880 1234 567 890</span>
            </li>
            <li className="flex items-center gap-3">
              <MdEmail className="text-xl text-white/60" />
              <span className="text-sm">support@unisreserve.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="text-left">
          <h6 className="text-xl font-bold mb-6">Stay Updated</h6>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe for admission alerts.
          </p>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Email address"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-white text-sm"
            />
            <Link to="/admission" className="block">
              <button className="w-full bg-white text-[#890c25] font-black py-3 rounded-xl hover:bg-gray-100 transition-all uppercase tracking-widest text-xs">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-medium">
          <p>
            Copyright © {new Date().getFullYear()} - UnisReserve. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
