"use client";
import { ChangeEvent, useState } from "react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../../icons/Icons";

export default function ContactForm({ gradient }: { gradient?: boolean }) {
  const [file, setFile] = useState<File | null>(null);
  return (
    <div className="relative bg-lightBLue w-full rounded-3xl flex flex-col items-center gap-4 h-full  py-5 px-6">
      <span className="p-3 absolute top-0 left-0 rounded-br-2xl bg-white before:absolute before:top-[0%] before:right-[0%] before:translate-x-[73%] before:bg-half before:h-[7px] before:w-[30px] before:bg-no-repeat before:bg-gradient-radial-right after:content-[''] after:absolute after:top-[100%] after:left-[0%] after:translate-x-[-27%] after:bg-half after:h-[7px] after:w-[30px] after:bg-no-repeat after:bg-gradient-radial-right ">
        Contact Us
      </span>
      <div className="flex justify-end items-center self-end gap-10 pr-10 max-xl:pr-2 max-xl:gap-5 pb-5">
        <LinkedinIcon />
        <FacebookIcon />
        <InstagramIcon />
      </div>
      <form
        onSubmit={() => console.log("submitted")}
        className="w-full flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Full Name"
          className="bg-white p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Company Name"
          className="bg-white p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Email Name"
          className="bg-white p-2 rounded-lg"
        />
        <textarea
          placeholder="Message"
          className="resize-none bg-white p-2 rounded-lg"
          rows={4}
        />
        <label className="w-full p-2 rounded-lg bg-white">
          <input
            type="file"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFile(e.target.files ? e.target.files[0] : null)
            }
            className="hidden"
          />
          <p className="font-extralight text-center cursor-pointer text-gray-500 capitalize">
            {file?.name ? file?.name : "+ Upload File"}
          </p>
        </label>
        <button
          type="submit"
          className={`w-full ${
            gradient ? "bg-gradient-main" : "bg-footerColor"
          } text-white py-2 rounded-xl`}
        >
          Send
        </button>
      </form>
    </div>
  );
}
