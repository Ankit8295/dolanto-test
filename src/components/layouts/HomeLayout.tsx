import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <div className="w-[92.5%] overflow-hidden mx-auto max-w-[1750px] flex flex-col gap-20">
      {children}
    </div>
  );
}
