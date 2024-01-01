"use client";

import { saveContactData } from "@/src/utils/helperFn";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import LoadingSvg from "../../Loader/LoadingSvg";

type Props = {};

export default function DownloadBrochure({}: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [sending, setSending] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});
  const submitHandler = handleSubmit((data) => {
    setSending(true);
    const fileData = new FormData();
    fileData.set("file", file as File);
    saveContactData(data, fileData).then((data) => {
      const res = JSON.parse(data);
      if (res.status === 200) {
        toast.success("Submitted Successfully");
        reset();
        setSending(false);
      } else {
        setSending(false);
        toast.error(res.message);
      }
    });
  });
  return (
    <div className="flex w-[60%] text-[#001942] mx-auto max-lg:w-full items-center gap-5 flex-col">
      <p className="text-center">
        Please fill out the form below for brochure with all the specifications
      </p>
      <div className="w-full  pb-5 bg-lightBLue  flex flex-col gap-3">
        <p className="p-3 bg-white w-fit  text-2xl">Download Brochure</p>
        <form
          onSubmit={submitHandler}
          className="w-full px-5 py-2 flex flex-col gap-5"
        >
          <div className="flex w-full max-sm:flex-col items-start gap-5">
            <div className="flex w-full flex-col gap-5">
              <input
                type="text"
                placeholder="Full Name*"
                className="bg-white p-2 rounded-lg"
                {...register("full_name", { required: true })}
              />
              <input
                type="text"
                placeholder="Company Name"
                className="bg-white p-2 rounded-lg"
                {...register("company_name")}
              />
              <input
                type="text"
                placeholder="Email*"
                className="bg-white p-2 rounded-lg"
                {...register("email", { required: true })}
              />
              <input
                type="number"
                placeholder="Phone Number*"
                className="bg-white p-2 rounded-lg"
                {...register("phone", { required: true })}
              />
            </div>
            <div className="flex w-full flex-col gap-5">
              <textarea
                placeholder="Message"
                className="resize-none bg-white p-2 rounded-lg"
                rows={6}
                {...register("message")}
              />
              <label className="w-full p-2 rounded-lg bg-white">
                <input
                  type="file"
                  {...register("file")}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFile(e.target.files ? e.target.files[0] : null)
                  }
                  className="hidden"
                />
                <p className="font-extralight text-center cursor-pointer text-gray-500 capitalize">
                  {file?.name ? file?.name : "+ Upload File"}
                </p>
              </label>
            </div>
          </div>
          <div className="w-full flex justify-start items-center gap-3">
            <input type="checkbox" className="p-3" required />{" "}
            <p>Privacy Policy*</p>
          </div>
          <button
            type="submit"
            className={`w-full flex items-center text-xl justify-center gap-2 bg-footerColor text-white py-3 rounded-xl`}
          >
            {sending && <LoadingSvg />}
            {sending ? "Downloading" : "Download"}
          </button>
        </form>
      </div>
    </div>
  );
}
