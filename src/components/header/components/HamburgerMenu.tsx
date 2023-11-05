"use client";
import "./style.css";
import {
  useAppState,
  useStateDispatch,
} from "@/src/providers/context-provider/ContextProvider";

export default function HamburgerMenu() {
  const dispatch = useStateDispatch();
  const { headerActive } = useAppState();
  function handleOpen(e: any) {
    e.preventDefault();
    dispatch({ type: "ACTIVE_HEADER", payload: !headerActive });
  }
  return (
    <nav
      onClick={handleOpen}
      className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center flex-col gap-1 rounded-full bg-lightBLue max-sm:bg-white"
    >
      <input
        type="checkbox"
        id="checkbox"
        checked={headerActive ? true : false}
        readOnly
      />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1"></div>
        <div
          className="bars w-[85%] flex justify-between items-center transition h-[4px]"
          id="bar2"
        >
          <div className="w-[45%] h-full bg-gradient-main rounded-lg"></div>
          <div className="w-[45%] h-full bg-gradient-main rounded-lg"></div>
        </div>
        <div className="bars" id="bar3"></div>
      </label>
    </nav>

    // <div
    //   onClick={() => setOpenMenu(!openMenu)}
    //   className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center flex-col gap-1 rounded-full bg-lightBLue"
    // >
    //   <div
    //     className={`w-[30px] rounded-full h-[.25rem] duration-300  bg-gradient-main transition-all ${
    //       openMenu ? "rotate-45 origin-center" : ""
    //     }`}
    //   ></div>
    //   <div
    //     className={`w-[30px] flex items-center justify-between transition-all ${
    //       openMenu ? "invisible" : ""
    //     }`}
    //   >
    //     <div className="w-[14px] rounded-full h-[.25rem] bg-gradient-main"></div>
    //     <div className="w-[14px] rounded-full h-[.25rem] bg-gradient-main"></div>
    //   </div>
    //   <div
    //     className={`w-[30px] rounded-full h-[.25rem]  duration-300 bg-gradient-main transition-all ${
    //       openMenu ? "-rotate-45 origin-center" : ""
    //     }`}
    //   ></div>
    // </div>
  );
}
