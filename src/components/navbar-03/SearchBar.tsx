import searchIcon from "./assets/search.svg";

const SearchBar = () => {
  return (
    <div className="flex flex-1 max-w-[400px] max-md:hidden">
      <input
        type="text"
        className="
          flex-1 text-[14px] relative z-10
          px-[10px] py-[6px] bg-transparent
          border border-neutral-500 rounded-md rounded-e-none
          focus:ring-2 focus:ring-[#a970ff] focus:outline-none
        "
      />

      <div
        className="
          px-[5px] self-stretch cursor-pointer
          flex items-center justify-center
          bg-[#2f2f35] rounded-md rounded-s-none hover:bg-[#35353b]
        "
      >
        <img src={searchIcon} alt="Search Icon" />
      </div>
    </div>
  );
};
export default SearchBar;
