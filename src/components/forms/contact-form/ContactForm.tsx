"use client";
import { ChangeEvent, useState } from "react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../../icons/Icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LoadingSvg from "../../Loader/LoadingSvg";
import { toast } from "react-toastify";
import Link from "next/link";
import { aboutDolantoContact } from "@/src/constants/contactDetail";

type FormDataType = {
  name: string;
  companyName: string;
  email: string;
  message: string;
  file?: File;
};

// const formValidationSchema = yup.object().shape({
//   name: yup.string().required("Name is required"),
//   companyName: yup.string().required("Company name is required"),
//   email: yup.string().email("Invalid email").required("Email is required"),
//   message: yup.string().required("Message is required"),
//   file: yup.mixed().notRequired(),
// });

export default function ContactForm({ gradient }: { gradient?: boolean }) {
  const [file, setFile] = useState<File | null>(null);
  const [sending, setSending] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    // resolver: yupResolver(formValidationSchema),
  });

  const submitHandler = handleSubmit((data) => {
    setSending(true);
    try {
      toast.success("Submitted Successfully");
      reset();
      setSending(false);
    } catch (err) {
      console.log(err);
      setSending(false);
    }
  });

  return (
    <div className="relative bg-lightBLue w-full rounded-3xl flex flex-col items-center gap-4 h-full  py-5 px-6">
      <span className="p-3 absolute top-0 left-0 rounded-br-2xl bg-white before:absolute before:top-[0%] before:right-[0%] before:translate-x-[73%] before:bg-half before:h-[7px] before:w-[30px] before:bg-no-repeat before:bg-gradient-radial-right after:content-[''] after:absolute after:top-[100%] after:left-[0%] after:translate-x-[-27%] after:bg-half after:h-[7px] after:w-[30px] after:bg-no-repeat after:bg-gradient-radial-right ">
        Contact Us
      </span>
      <div className="flex justify-end items-center self-end gap-10 pr-10 max-xl:pr-2 max-xl:gap-5 pb-5">
        <Link href={aboutDolantoContact.linkedin} target="_blank">
          <LinkedinIcon />
        </Link>
        <Link href={aboutDolantoContact.facebook} target="_blank">
          <FacebookIcon />
        </Link>
        <Link href={aboutDolantoContact.instagram} target="_blank">
          <InstagramIcon />
        </Link>
      </div>
      <form onSubmit={submitHandler} className="w-full flex flex-col gap-5">
        <input
          type="text"
          placeholder="Full Name"
          className="bg-white p-2 rounded-lg"
          {...register("name", { required: true })}
        />
        <input
          type="text"
          placeholder="Company Name"
          className="bg-white p-2 rounded-lg"
          {...register("companyName", { required: true })}
        />
        <input
          type="text"
          placeholder="Email Name"
          className="bg-white p-2 rounded-lg"
          {...register("email", { required: true })}
        />
        <textarea
          placeholder="Message"
          className="resize-none bg-white p-2 rounded-lg"
          rows={4}
          {...register("message", { required: true })}
        />
        <label className="w-full p-2 rounded-lg bg-white">
          <input
            type="file"
            accept=".pdf, .doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
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
        <button
          type="submit"
          className={`w-full flex items-center text-xl justify-center gap-2 ${
            gradient ? "bg-gradient-main" : "bg-footerColor"
          } text-white py-2 rounded-xl`}
        >
          {sending && <LoadingSvg />}
          {sending ? "Sending" : "Send"}
        </button>
      </form>
    </div>
  );
}
