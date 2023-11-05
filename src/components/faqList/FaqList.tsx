// "use client";
// import "./style.css";
// import { useState, useEffect } from "react";
// import { useAnimate, stagger, motion } from "framer-motion";

// const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

// function useMenuAnimation(isOpen: boolean) {
//   const [scope, animate] = useAnimate();

//   useEffect(() => {
//     animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

//     animate(
//       "ul",
//       {
//         clipPath: isOpen
//           ? "inset(0% 0% 0% 0% round 10px)"
//           : "inset(10% 50% 90% 50% round 10px)",
//       },
//       {
//         type: "spring",
//         bounce: 0,
//         duration: 0.5,
//       }
//     );

//     animate(
//       "li",
//       isOpen
//         ? { opacity: 1, scale: 1, filter: "blur(0px)" }
//         : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
//       {
//         duration: 0.2,
//         delay: isOpen ? staggerMenuItems : 0,
//       }
//     );
//   }, [isOpen]);

//   return scope;
// }

// type props = {
//   qs: string;
//   ans: string;
// };
// export default function FaqList({ ans, qs }: props) {
//   const [isOpen, setIsOpen] = useState(false);
//   const scope = useMenuAnimation(isOpen);

//   return (
//     <nav className="menu" ref={scope}>
//       <motion.button
//         whileTap={{ scale: 0.97 }}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {qs}
//         <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
//           <svg width="15" height="15" viewBox="0 0 20 20">
//             <path d="M0 7 L 20 7 L 10 16" />
//           </svg>
//         </div>
//       </motion.button>
//       <ul
//         style={{
//           pointerEvents: isOpen ? "auto" : "none",
//           clipPath: "inset(10% 50% 90% 50% round 10px)",
//         }}
//       >
//         <li>{ans}</li>
//       </ul>
//     </nav>
//   );
// }
type props = {
  qs: string;
  ans: string;
};
export default function FaqList({ ans, qs }: props) {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const scope = useMenuAnimation(isOpen);

  return (
    <details className="w-full p-2 bg-white rounded-xl">
      <summary className="p-2 text-lg">{qs}</summary>
      <p>{ans}</p>
    </details>
  );
}
