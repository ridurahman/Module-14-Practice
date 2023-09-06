"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const route = useRouter();
  const logoutHandler = async () => {
    const res = await fetch("/api/login");
    const json = await res.json();
    if (json["status"] === true) {
      route.replace("/login");
    }
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default page;
