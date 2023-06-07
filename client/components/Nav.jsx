'use client';

import React, { userState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-s flex-center">
        <Image
          src="/../public/flame.png"
          alt="Glavr Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Galvr</p>
      </Link>

      <div className="sm:flex hidden">
        <div className="flex gap-3 md:grap-5">
          <Link href="histograms" className="black_btn">
            Histograms
          </Link>
          <Link href="Graph_2" className="black_btn">
            Graph_2
          </Link>
          <Link href="Graph_3" className="black_btn">
            Graph_3
          </Link>
        </div>
      </div>
    </nav>
  );
}
