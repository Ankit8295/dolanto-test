import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function DialogBoxWrapper({ children, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function closeModalFn(e: any) {
      if (modalRef.current) {
        if (!modalRef.current.contains(e.target)) {
          onClose();
        }
      }
    }
    document.addEventListener("click", closeModalFn, true);
    return () => {
      document.removeEventListener("click", closeModalFn, true);
    };
  }, [onClose]);
  return (
    <>
      {createPortal(
        <div className="w-screen h-screen fixed top-0 left-0 z-[999] flex justify-center items-center bg-black/40">
          <div
            ref={modalRef}
            className="w-[70%] h-[60%] max-lg:w-[95%] max-lg:h-auto"
          >
            {children}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
