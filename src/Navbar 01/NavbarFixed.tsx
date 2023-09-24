import { motion } from "framer-motion";

const navVariants = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};

function NavbarFixed() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={navVariants}
      className="fixed z-[999] top-4 left-1/2 -translate-x-1/2 rounded-full p-1 bg-white bg-opacity-[.08] backdrop-blur-lg border border-white border-opacity-[.08]"
    >
      <ul className="flex items-center gap-2 text-sm font-medium font-jakarta text-white">
        <li>
          <a href="#" className="p-4 hover:opacity-50">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="p-4 hover:opacity-50">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="p-4 hover:opacity-50">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="p-4 hover:opacity-50">
            Contact
          </a>
        </li>
        <li>
          <button className="font-jakarta text-sm px-4 py-2 rounded-3xl text-white font-medium bg-[#171719] border border-white border-opacity-[.08] hover:border-opacity-25">
            Login
          </button>
        </li>
      </ul>
    </motion.div>
  );
}
export default NavbarFixed;
