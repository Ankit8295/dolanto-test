import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 min-h-[50vh]">
      <h2 className="text-5xl">Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="border bg-footerColor rounded-xl text-white py-2 px-5"
      >
        Return Home
      </Link>
    </div>
  );
}
