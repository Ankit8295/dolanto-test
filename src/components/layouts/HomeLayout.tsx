import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <div className="w-[95%] mx-auto max-w-[1550px] flex flex-col gap-12">
      {children}
    </div>
  );
}
