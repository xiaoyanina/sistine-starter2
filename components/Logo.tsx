"use client";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-foreground px-2 py-1 relative z-20"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
      >
        <rect width="512" height="512" fill="#9C4221" rx="80" ry="80"/>
        <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="Arial" font-weight="normal" fill="#FEEBC8" font-size="409.6">X</text>
      </svg>
      <span className="font-medium text-foreground">yanina.AI</span>
    </Link>
  );
};
