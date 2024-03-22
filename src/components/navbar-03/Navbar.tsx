import { useRef, useState } from "react";

import {
  MORE_MENU_DROPDOWN,
  PROFILE_MENU_DROPDOWN,
  RIGHT_NAV_ITEMS,
} from "./utils/constants";
import {
  profilePic,
  logo,
  menuIcon,
  searchIcon,
  followingIcon,
  browseIcon,
} from "./utils/Icons";

import SearchBar from "./SearchBar";
import DropdownMenu from "./DropdownMenu";
import useClickOutside from "./useClickOutside";

const Navbar = () => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState<boolean>(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);

  const moreMenuRef = useRef<HTMLButtonElement | null>(null);
  const profileMenuRef = useRef<HTMLButtonElement | null>(null);

  useClickOutside(moreMenuRef, () => setIsMoreMenuOpen(false));
  useClickOutside(profileMenuRef, () => setIsProfileMenuOpen(false));

  return (
    <nav
      className="
      bg-[#18181b] h-[50px] px-5 shadow-sm
      flex items-center justify-between gap-4
    "
    >
      <div className="flex gap-7 items-center">
        <div className="shrink-0">
          <img src={logo} alt="Twitch Logo" />
        </div>

        <a
          href="/following"
          className="text-[17px] font-semibold hover:text-[--clr-primary] shrink-0 max-sm:hidden"
        >
          Following
        </a>
        <a
          href="/browse"
          className="text-[17px] font-semibold hover:text-[--clr-primary] shrink-0 max-sm:hidden"
        >
          Browse
        </a>
        <img
          src={followingIcon}
          alt="Following"
          className="hidden max-sm:block shrink-0"
        />
        <img
          src={browseIcon}
          alt="Browse"
          className="hidden max-sm:block shrink-0"
        />

        <button
          className="p-1 rounded-[4px] cursor-pointer hover:bg-[--clr-bg-light] relative shrink-0"
          onClick={() => setIsMoreMenuOpen((prev) => !prev)}
          ref={moreMenuRef}
        >
          <img src={menuIcon} alt="Vertical Menu Icon" />

          {/* Dropdown for More Button Menu */}
          {<DropdownMenu data={MORE_MENU_DROPDOWN} isOpen={isMoreMenuOpen} />}
        </button>
      </div>

      <SearchBar />

      <div className="flex gap-3 items-center">
        {RIGHT_NAV_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="
              p-1 rounded-[4px] cursor-pointer hover:bg-[--clr-bg-light]
              relative flex gap-1 max-lg:hidden
            "
          >
            <img src={item.iconPath} alt={item.name} />
            {idx === RIGHT_NAV_ITEMS.length - 1 && (
              <span className="text-sm font-semibold">{item.name}</span>
            )}
          </div>
        ))}

        <div
          className="
            hidden p-1 rounded-[4px] hover:bg-[--clr-bg-light] max-md:flex
            relative gap-1 cursor-pointer shrink-0
          "
        >
          <img src={searchIcon} alt="Search Icon" />
        </div>

        <button
          className="w-8 h-8 aspect-square rounded-full relative"
          onClick={() => setIsProfileMenuOpen((prev) => !prev)}
          ref={profileMenuRef}
        >
          <img
            className="w-full h-full object-cover rounded-full"
            src={profilePic}
            alt="Profile Picture"
          />
          {/* Dropdown for PROFILE Button */}
          <DropdownMenu
            data={PROFILE_MENU_DROPDOWN}
            isOpen={isProfileMenuOpen}
            direction="right"
          />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
