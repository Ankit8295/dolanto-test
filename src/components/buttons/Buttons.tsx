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
      className={`border border-blueMain hover:bg-blueMain hover:text-white transition-colors text-blueMain  px-4 flex  items-center justify-center text-xs font-medium py-2 ${customStyles}`}
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
      className={`bg-gradient-main rounded-full text-sm py-3 px-4 text-white ${customStyles}`}
    >
      {children}
    </button>
  );
}

export function BlueButtonWrapper({
  children,
  Icon,
}: {
  children: React.ReactNode;
  Icon?: React.ReactElement;
}) {
  return (
    <div className="text-blueMain group cursor-pointer transition-colors bg-lightBLue rounded-2xl px-4 flex gap-2 items-center justify-center text-xs font-medium py-3 hover:bg-blueMain hover:text-white">
      {children}
      {Icon}
    </div>
  );
}

export function GradientBgButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-black cursor-pointer hover:bg-gradient-main rounded-md font-medium hover:text-white   px-5 flex gap-2 items-center justify-center   py-2">
      {children}
    </div>
  );
}
