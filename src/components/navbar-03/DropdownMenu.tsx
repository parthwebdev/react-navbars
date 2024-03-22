import { type Dropdown } from "./utils/constants";

const DropdownMenu = ({
  data,
  isOpen,
  direction = "left",
}: {
  data: Dropdown[];
  isOpen: boolean;
  direction?: "left" | "right";
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="
            absolute top-full
            w-48 p-[10px] flex flex-col
            bg-[#1f1f23] rounded-md cursor-default
          "
          style={direction === "left" ? { left: 0 } : { right: 0 }}
        >
          {data.map((menu, idx) => (
            <div key={idx}>
              {/* Render Section title if there is one */}
              {menu.section && (
                <h4
                  className="
                    text-[13px] font-semibold text-[--clr-text-light]
                    text-start uppercase 
                    p-[5px]
                  "
                >
                  {menu.section}
                </h4>
              )}

              {/* Render the Menu Items */}
              {menu.items &&
                menu.items.map((item) => (
                  <div
                    key={item.label}
                    className="
                      text-[13px] text-start hover:bg-[#38383f]
                      w-full p-[5px] rounded-md cursor-pointer
                      flex items-center gap-2
                    "
                  >
                    {item.iconPath && (
                      <img
                        src={item.iconPath}
                        className={idx === 0 ? "w-10 h-10 rounded-full" : ""}
                      ></img>
                    )}
                    {item.label}
                  </div>
                ))}
              {idx !== data.length - 1 && (
                <div className="h-[1px] bg-[--clr-bg-light] px-[5px] my-[10px]"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DropdownMenu;
