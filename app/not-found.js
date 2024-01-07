import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="py-3 flex justify-center items-center">
        <div className="w-3/4 ">
          <img src="/not.png" alt="" />
        </div>
        <div>
          <Link className="text-3xl font-bold" href="/">
            Go Home page
          </Link>
        </div>
      </div>
    </>
  );
}
