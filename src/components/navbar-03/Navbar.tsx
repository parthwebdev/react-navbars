import { RefObject, useEffect, useRef, useState } from "react";

import logo from "./assets/logo.svg";
import menuIcon from "./assets/menu.svg";

import { NAV_MORE_ITEMS } from "./constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const menuRef = useRef<HTMLButtonElement | null>(null);
  const profileRef = useRef<HTMLButtonElement | null>(null);
  const refs = useRef<Array<RefObject<HTMLElement>>>([menuRef, profileRef]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      refs.current.every((ref: RefObject<HTMLElement>) => {
        if (ref.current && !ref.current.contains(e.target as Node))
          setIsExpanded(false);
      });
    };

    document.addEventListener("click", handleClickOutside);

    () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav
      className="
      bg-[#18181b] h-[50px] px-5 shadow-sm
      flex items-center justify-between
    "
    >
      <div className="flex gap-7 items-center">
        <div>
          <img src={logo} alt="Twitch Logo" />
        </div>

        <a
          href="/following"
          className="text-[17px] font-semibold hover:text-[--clr-primary]"
        >
          Following
        </a>
        <a
          href="/browse"
          className="text-[17px] font-semibold hover:text-[--clr-primary]"
        >
          Browse
        </a>

        <button
          className="p-1 rounded-[4px] cursor-pointer hover:bg-[--clr-bg-light] relative"
          onClick={() => setIsExpanded((prev) => !prev)}
          ref={menuRef}
        >
          <img src={menuIcon} alt="Vertical Menu Icon" />
          {isExpanded && (
            <div
              className="
                absolute top-full left-0
                w-48 p-[10px] flex flex-col
                bg-[#1f1f23] rounded-md
              "
            >
              {NAV_MORE_ITEMS.map((navItem, idx) => (
                <div key={navItem.name}>
                  <>
                    <h4
                      className="
                        text-[13px] font-semibold text-[--clr-text-light]
                        text-start uppercase 
                        p-[5px]
                      "
                    >
                      {navItem.name}
                    </h4>
                    {navItem.items.map((subItem) => (
                      <div
                        key={subItem}
                        className="
                          text-[13px] text-start hover:bg-[#38383f]
                          w-full p-[5px] rounded-md
                        "
                      >
                        {subItem}
                      </div>
                    ))}
                  </>
                  {idx !== NAV_MORE_ITEMS.length - 1 && (
                    <div className="h-[1px] bg-[--clr-bg-light] px-[5px] my-[10px]"></div>
                  )}
                </div>
              ))}
            </div>
          )}
        </button>
      </div>

      <SearchBar />

      <div></div>
    </nav>
  );
};
export default Navbar;
