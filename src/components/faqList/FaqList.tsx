type props = {
  qs: string;
  ans: string;
};
export default function FaqList({ ans, qs }: props) {
  return (
    <details className="w-full p-2 text-lg bg-white rounded-xl group">
      <summary>
        <div className="flex items-center justify-between gap-2">
          <p className="p-2 bg-gradient-to-r from-black to-black group-open:bg-gradient-main   bg-clip-text text-transparent">
            {qs}
          </p>
          <svg
            className="group-open:hidden block mr-2"
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
          <svg
            className="group-open:block hidden mr-2"
            width="10"
            height="3"
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

        <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-500  px-2 pb-2">
          <p className="overflow-hidden mt-0 group-open:mt-5 transition-all">
            {ans}
          </p>
        </div>
      </summary>
    </details>
  );
}
