function NavbarDefault() {
  return (
    <nav className="flex justify-between items-center px-10 py-5">
      <div>
        <h2 className="text-xl text-white font-semibold">Logo</h2>
      </div>

      <ul className="flex items-center gap-2 text-[#bdbdc0] font-medium font-jakarta">
        <li>
          <a href="" className="p-3 hover:text-white">
            Home
          </a>
        </li>
        <li>
          <a href="" className="p-3 hover:text-white">
            Features
          </a>
        </li>
        <li>
          <a href="" className="p-3 hover:text-white">
            Pricing
          </a>
        </li>
        <li>
          <a href="" className="p-3 hover:text-white">
            Contact
          </a>
        </li>
      </ul>

      <div>
        <button className="font-jakarta text-sm px-4 py-2 rounded-full text-white font-medium bg-white bg-opacity-[.08] border border-white border-opacity-[.08] hover:border-opacity-25">
          Log in
        </button>
      </div>
    </nav>
  );
}
export default NavbarDefault;
