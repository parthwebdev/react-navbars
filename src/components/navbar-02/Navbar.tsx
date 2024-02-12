import { useState } from "react";
import { motion } from "framer-motion";

import Section from "./Section";
import { sections } from "./content";

export type SectionId = (typeof sections)[number]["id"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("html");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <>
      <nav
        className="
        fixed z-[999] top-4 left-1/2 -translate-x-1/2
        px-3 py-2 rounded-full border border-white border-opacity-[.08]
        bg-white bg-opacity-[.08] backdrop-blur-lg 
      "
      >
        <ul
          className="
          flex justify-center items-center gap-2 
          font-medium text-white
        "
        >
          {sections.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => {
                  setTimeOfLastClick(Date.now());
                  setActiveSection(link.id);
                }}
                className="relative text-sm py-2 px-4 tracking-wide inline-block"
              >
                {link.heading}

                {activeSection === link.id && (
                  <motion.div
                    layoutId="bubble"
                    className="
                    absolute inset-0 -z-10
                    bg-purple-900 rounded-full
                  "
                    transition={{ type: "spring", duration: 0.6 }}
                  ></motion.div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {sections.map((section) => (
        <Section
          key={section.id}
          setActiveSection={setActiveSection}
          section={section}
          timeOfLastClick={timeOfLastClick}
        />
      ))}
    </>
  );
};
export default Navbar;
