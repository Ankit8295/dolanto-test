/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { ClienteleType } from "../ClientEle";

type Props = {
  client: ClienteleType;
};

export default function ClientEleCard({ client }: Props) {
  return (
    <div
      data-aos="fade-up"
      className="w-full max-sm:max-w-[300px]  max-lg:w-full p-5 aspect-square flex flex-col justify-between items-center  bg-lightBLue h-full"
    >
      <div className="w-full grow  flex items-center justify-center">
        <img
          width={130}
          height={130}
          alt={client.client_name}
          src={client.image}
          loading="lazy"
          className="aspect-video w-full mix-blend-multiply"
        />
      </div>
      <div className="py-2 rounded-xl text-sm font-medium bg-white px-5">
        <p className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.65169 19.1025L3.344 19.3909H3.344L2.65169 19.1025ZM1.67947 21.4358L2.37178 21.7243L1.67947 21.4358ZM22.3205 21.4358L21.6282 21.7243L22.3205 21.4358ZM21.3483 19.1025L22.0406 18.814L21.3483 19.1025ZM16.6667 16.9166C16.2524 16.9166 15.9167 17.2524 15.9167 17.6666C15.9167 18.0808 16.2524 18.4166 16.6667 18.4166V16.9166ZM7.33332 18.4166C7.74753 18.4166 8.08332 18.0808 8.08332 17.6666C8.08332 17.2524 7.74753 16.9166 7.33332 16.9166V18.4166ZM19.4167 9.62955C19.4167 11.6768 18.2555 14.1047 16.6522 16.057C15.8597 17.0219 14.9866 17.8359 14.1481 18.4024C13.2936 18.9798 12.5498 19.2499 12 19.2499V20.7499C12.9814 20.7499 14.0241 20.2965 14.9879 19.6453C15.9678 18.9833 16.945 18.0638 17.8113 17.009C19.5257 14.9215 20.9167 12.1642 20.9167 9.62955H19.4167ZM12 19.2499C11.4502 19.2499 10.7064 18.9798 9.85182 18.4024C9.01335 17.8359 8.1403 17.0219 7.3478 16.057C5.74446 14.1047 4.58332 11.6768 4.58332 9.62955H3.08332C3.08332 12.1642 4.47425 14.9215 6.18863 17.009C7.05498 18.0638 8.03219 18.9833 9.01208 19.6453C9.97587 20.2965 11.0185 20.7499 12 20.7499V19.2499ZM4.58332 9.62955C4.58332 5.45066 7.91496 2.08325 12 2.08325V0.583252C7.06435 0.583252 3.08332 4.6446 3.08332 9.62955H4.58332ZM12 2.08325C16.085 2.08325 19.4167 5.45066 19.4167 9.62955H20.9167C20.9167 4.6446 16.9356 0.583252 12 0.583252V2.08325ZM14.1667 9.49992C14.1667 10.6965 13.1966 11.6666 12 11.6666V13.1666C14.025 13.1666 15.6667 11.525 15.6667 9.49992H14.1667ZM12 11.6666C10.8034 11.6666 9.83332 10.6965 9.83332 9.49992H8.33332C8.33332 11.525 9.97494 13.1666 12 13.1666V11.6666ZM9.83332 9.49992C9.83332 8.3033 10.8034 7.33325 12 7.33325V5.83325C9.97494 5.83325 8.33332 7.47487 8.33332 9.49992H9.83332ZM12 7.33325C13.1966 7.33325 14.1667 8.3033 14.1667 9.49992H15.6667C15.6667 7.47487 14.025 5.83325 12 5.83325V7.33325ZM1.95939 18.814L0.987164 21.1474L2.37178 21.7243L3.344 19.3909L1.95939 18.814ZM3.83332 25.4166H20.1667V23.9166H3.83332V25.4166ZM23.0128 21.1474L22.0406 18.814L20.656 19.3909L21.6282 21.7243L23.0128 21.1474ZM19.1944 16.9166H16.6667V18.4166H19.1944V16.9166ZM4.80554 18.4166H7.33332V16.9166H4.80554V18.4166ZM22.0406 18.814C21.5618 17.665 20.4392 16.9166 19.1944 16.9166V18.4166C19.8336 18.4166 20.4101 18.8009 20.656 19.3909L22.0406 18.814ZM20.1667 25.4166C22.3669 25.4166 23.859 23.1783 23.0128 21.1474L21.6282 21.7243C22.0627 22.7672 21.2965 23.9166 20.1667 23.9166V25.4166ZM0.987164 21.1474C0.140933 23.1783 1.63312 25.4166 3.83332 25.4166V23.9166C2.70348 23.9166 1.93723 22.7672 2.37178 21.7243L0.987164 21.1474ZM3.344 19.3909C3.58984 18.8009 4.16635 18.4166 4.80554 18.4166V16.9166C3.5608 16.9166 2.43813 17.665 1.95939 18.814L3.344 19.3909Z"
              fill="#001942"
            />
          </svg>
          <span className="font-normal text-sm whitespace-nowrap max-xl:text-xs">
            {client.location}
          </span>
        </p>
      </div>
    </div>
  );
}
