import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex-1 text-center m-52">
      <p className="text-9xl font-bold">404</p>
      <p className="text-5xl p-6">Page Not Found Here</p>
      <Link href="/" className="text-blue-500 text-2xl">
        Go To Home
      </Link>
    </div>
  );
};

export default NotFound;
