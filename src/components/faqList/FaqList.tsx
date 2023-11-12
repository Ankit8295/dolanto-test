"use client";

import { useState } from "react";

type Props = {
  qs: string;
  ans: string;
};

export default function FaqList({ ans, qs }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <details open={open} className="w-full p-2 text-lg bg-white rounded-xl ">
      <summary>
        <div
          onClick={handleOpen}
          className="grid grid-cols-[1fr_30px] items-center cursor-pointer"
        >
          <p
            className={`p-2  from-black to-black ${
              open ? "bg-gradient-main" : "bg-gradient-to-r"
            } bg-clip-text text-transparent`}
          >
            {qs}
          </p>
          {!open ? (
            <div className="flex items-center justify-center">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3509 7.66665H7.23895V12.8506H5.19895V7.66665H0.110949V5.81865H5.19895V0.610647H7.23895V5.81865H12.3509V7.66665Z"
                  fill="url(#paint0_linear_1388_2055)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1388_2055"
                    x1="1.71436"
                    y1="4.53179"
                    x2="10.7144"
                    y2="4.53179"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#03EAEA" />
                    <stop offset="1" stopColor="#005FEA" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <svg
                width="10"
                height="5"
                viewBox="0 0 10 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.57277 0.794648V2.64265H-0.00322881V0.794648H9.57277Z"
                  fill="url(#paint0_linear_1388_2059)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1388_2059"
                    x1="1.57129"
                    y1="-0.468209"
                    x2="8.857"
                    y2="-0.468209"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#03EAEA" />
                    <stop offset="1" stopColor="#005FEA" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          )}
        </div>
        <div
          className={` grid  ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }  transition-[grid-template-rows] duration-500 px-2 pb-2`}
        >
          <p
            className={`overflow-hidden max-sm:text-sm ${
              open ? "opacity-100" : "opacity-0"
            }   transition duration-300`}
          >
            {ans}
          </p>
        </div>
      </summary>
    </details>
  );
}

// type props = {
//   qs: string;
//   ans: string;
// };
// export default function FaqList({ ans, qs }: props) {
//   return (
//     <details className="w-full p-2 text-lg bg-white rounded-xl group">
//       <summary>
//         <div className="grid grid-cols-[1fr_40px] items-center ">
//           <p className="p-2 bg-gradient-to-r from-black to-black group-open:bg-gradient-main   bg-clip-text text-transparent">
//             {qs}
//           </p>
//           <svg
//             className="group-open:hidden block"
//             width="13"
//             height="13"
//             viewBox="0 0 13 13"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M12.3509 7.66665H7.23895V12.8506H5.19895V7.66665H0.110949V5.81865H5.19895V0.610647H7.23895V5.81865H12.3509V7.66665Z"
//               fill="url(#paint0_linear_1388_2055)"
//             />
//             <defs>
//               <linearGradient
//                 id="paint0_linear_1388_2055"
//                 x1="1.71436"
//                 y1="4.53179"
//                 x2="10.7144"
//                 y2="4.53179"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#03EAEA" />
//                 <stop offset="1" stopColor="#005FEA" />
//               </linearGradient>
//             </defs>
//           </svg>
//           <svg
//             className="group-open:block hidden"
//             width="10"
//             height="3"
//             viewBox="0 0 10 3"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M9.57277 0.794648V2.64265H-0.00322881V0.794648H9.57277Z"
//               fill="url(#paint0_linear_1388_2059)"
//             />
//             <defs>
//               <linearGradient
//                 id="paint0_linear_1388_2059"
//                 x1="1.57129"
//                 y1="-0.468209"
//                 x2="8.857"
//                 y2="-0.468209"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#03EAEA" />
//                 <stop offset="1" stopColor="#005FEA" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
//         <div className="w-[80%] grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-500  px-2 pb-2">
//           <p className="overflow-hidden mt-0 group-open:mt-5 transition-all">
//             {ans}
//           </p>
//         </div>
//       </summary>
//     </details>
//   );
// }
