import Logo from "../../images/logo-inverse.webp";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const bodyTag = document.querySelector("body");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    bodyTag.style.overflow = !isMenuOpen ? "hidden" : "visible";
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <section className="box-border text-color-text font-dm-sans text-[16px] font-normal break-words px-[20px] xl:px-[70px] py-[10px] xl:py-[27px] flex items-center justify-between bg-stone-500">
      <div className="flex gap-x-12">
        <a href={wp_data.home_url ? wp_data.home_url : "#"}>
          <img
            className="h-[18px] w-[134px] md:h-[26.5px] md:w-[197.5px]"
            src={Logo}
            alt="Motorix logo"
          />
        </a>
        <nav className="hidden xl:block">
          <ul className="flex text-text-dark gap-x-6 text-[17px]">
            <li className="navbar-link-hover ">
              <a href="#">Home</a>
            </li>
            <li className="navbar-link-hover ">
              <a href="#">Blog</a>
            </li>
            <li className="navbar-link-hover ">
              <a href="#">Shop</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-x-4 text-text-dark">
        <i className="fa fa-search !text-[22px] md:!text-[24px]"></i>
        <i
          className="fa fa-bars xl:!hidden !text-[20px] md:!text-[22px] hover:cursor-pointer"
          onClick={toggleMenu}
        ></i>
        <div className="xl:hidden bg-black rounded-full w-[30px] h-[30px] md:w-[34px] md:h-[34px] flex justify-center items-center text-[18px] md:text-[22px]">
          <i class="fa fa-phone"></i>
        </div>
        <a href="#" className="hidden xl:block text-[20px]">
          1 800 555 56 97
        </a>
        <button className="hidden md:block bg-color-text !text-[12px] xl:!text-[14px] px-[24px] py-[12px] xl:px-[40px] xl:py-[18px] text-bg-color ms-4 uppercase font-roboto font-medium">
          get started
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-alter-bg-color grid grid-cols-[60%_40%] grid-rows-[20%_60%_20%]">
          <div className="text-color-text flex justify-between items-center px-[32px] py-[35px] col-start-1 col-end-3 row-start-1 row-end-2">
            <a href={wp_data.home_url ? wp_data.home_url : "#"}>
              <img
                className="h-[18px] w-[134px] md:h-[26.5px] md:w-[197.5px]"
                src={Logo}
                alt="Motorix logo"
              />
            </a>
            <button
              className="text-[17px] flex items-center gap-x-4 hover:cursor-pointer"
              onClick={toggleMenu}
            >
              <span className="text-alter-light">Close</span>{" "}
              <i className="fa fa-times !text-[25px]"></i>
            </button>
          </div>

          <nav className="overflow-scroll text-color-text mx-[30px] mt-[48px] col-start-1 col-end-2 row-start-2 row-end-3">
            <ul className="">
              <li onClick={toggleSubMenu} className="hover:text-white">
                <a
                  href="#"
                  className="text-[20px] font-medium leading-[42px] pr-[30px]"
                >
                  Home
                </a>
                <i className="fa fa-arrow-right"></i>
                {isSubMenuOpen && (
                  <ul>
                    <li className="py-[5.4px] pl-[18px] pr-[27px]">
                      <a href="#">Car Repair</a>
                    </li>
                    <li className="py-[5.4px] pl-[18px] pr-[27px]">
                      <a href="#">Wheels and Tires</a>
                    </li>
                    <li className="py-[5.4px] pl-[18px] pr-[27px]">
                      <a href="#">Accessories Store</a>
                    </li>
                    <li className="py-[5.4px] pl-[18px] pr-[27px]">
                      <a href="#">Car Detailing</a>
                    </li>
                    <li className="py-[5.4px] pl-[18px] pr-[27px]">
                      <a href="#">Auto Body Shop</a>
                    </li>
                    <li className="py-[5.4px] pl-[18px] pr-[27px]">
                      <a href="#">Car Wash</a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="hover:text-white">
                <a
                  href="#"
                  className="text-[20px] font-medium leading-[42px] pr-[30px]"
                >
                  Blog
                </a>
                <i className="fa fa-arrow-right"></i>
              </li>
              <li className="hover:text-white">
                <a
                  href="#"
                  className="text-[20px] font-medium leading-[42px] pr-[30px]"
                >
                  Shop
                </a>
                <i className="fa fa-arrow-right"></i>
              </li>
            </ul>
          </nav>

          <div className="hidden md:block bg-dark px-10 py-5 col-start-2 col-end-3 row-start-2 row-end-3 h-full content-center">
            <h6 className="!text-text-dark mt-0">Have a Project?</h6>
            <a
              href="mailto:info@website.com"
              className="hover-underline-animation text-[20.8px]"
            >
              info@website.com
            </a>
            <h6 className="!text-text-dark">Want to Work with Us?</h6>
            <a
              href="#"
              className="text-[20px] text-text-dark font-medium leading-[42px] pr-[30px]"
            >
              Send Brief
            </a>
            <i className="fa fa-arrow-right text-link"></i>
            <h6 className="!text-text-dark">Want to Buy Products?</h6>
            <a
              href="#"
              className="text-[20px] text-text-dark font-medium leading-[42px] pr-[30px]"
            >
              Go to Shop
            </a>
            <i className="fa fa-arrow-right text-link"></i>
          </div>

          <div className="my-[25px] mx-[32px] py-[20.8px] border-color-text border-t-[0.5px] flex items-center gap-x-8 col-start-1 col-end-3 row-start-3 row-end-4">
            <a href="#" className="hover:text-color-fb">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-color-x">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-color-dribbble">
              <i class="fa fa-dribbble"></i>
            </a>
            <a href="#" className="hover:text-color-instagram">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
