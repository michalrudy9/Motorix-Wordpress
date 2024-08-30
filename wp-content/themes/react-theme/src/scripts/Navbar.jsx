import Logo from "../../images/logo-inverse.webp";

const Navbar = () => {
  return (
    <section className="mt-60 box-border text-color-text font-dm-sans text-[16px] font-normal break-words px-[20px] xl:px-[70px] py-[10px] xl:py-[27px] flex items-center justify-between bg-stone-500">
      <div className="flex gap-x-12">
        <img
          className="h-[18px] w-[134px] md:h-[26.5px] md:w-[197.5px]"
          src={Logo}
          alt="Motorix logo"
        />
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
        <i className="fa fa-bars xl:!hidden !text-[20px] md:!text-[22px]"></i>
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
    </section>
  );
};

export default Navbar;
