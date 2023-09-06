import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link href="/login">Login</Link>
      <br />
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
};

export default page;
