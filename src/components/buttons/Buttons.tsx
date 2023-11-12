import Link from "next/link";
import { LinkArrow } from "../icons/Icons";

type Props = {
  label: React.ReactNode;
  link: string;
  customStyles?: string;
};

export function LinkButton({
  label,
  link,
  customStyles = "rounded-2xl",
}: Props) {
  return (
    <Link
      className={`border border-blueMain hover:bg-blueMain group hover:text-white w-full  transition-all  text-blueMain  p-4 flex  items-center justify-center text-sm font-medium  ${customStyles}`}
      href={link}
    >
      {label}
      <LinkArrow />
    </Link>
  );
}
export function GradientButtonWrapper({
  children,
  customStyles,
}: {
  children: React.ReactNode;
  customStyles?: string;
}) {
  return (
    <button
      className={`bg-gradient-main rounded-full  py-3 px-4 text-white ${customStyles}`}
    >
      {children}
    </button>
  );
}

export function BlueButtonWrapper({
  children,
  Icon,
  rounded = "rounded-3xl",
  width = "w-fit",
}: {
  children: React.ReactNode;
  Icon?: React.ReactElement;
  rounded?: string;
  width?: "w-fit" | "w-full";
}) {
  return (
    <div
      className={`text-blueMain group cursor-pointer transition-colors bg-lightBLue ${rounded} ${width} p-4 flex gap-2 items-center justify-center text-sm font-medium  hover:bg-blueMain hover:text-white`}
    >
      {children}
      {Icon}
    </div>
  );
}

export function GradientBgHover({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-black cursor-pointer hover:bg-gradient-main rounded-md font-medium hover:text-white   px-5 flex gap-2 items-center justify-center   py-2">
      {children}
    </div>
  );
}
