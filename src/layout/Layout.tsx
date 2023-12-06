import React, { useEffect, useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "./Header/Header";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Scrollbar from "smooth-scrollbar";
import LocomotiveScroll from "locomotive-scroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Head>
        <title>A$AP</title>
      </Head>
      <div data-scroll-container>
        <Header />
        {children}
        <Image
          src="/media/testing.gif"
          alt="asap main"
          width={1000}
          height={100}
        />
      </div>
    </>
  );
}
