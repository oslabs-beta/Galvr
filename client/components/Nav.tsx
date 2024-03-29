'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Navigation bar at the top of the page
export default function Nav(): JSX.Element {
  const [jaegerExists, setjaegerExists] = useState(false);

  // Check if Jaeger is connected and render the link conditionally
  const checkJaeger = async (): Promise<void> => {
    try {
      const result = await fetch('http://localhost:16686/dependencies', {
        method: 'HEAD',
        mode: 'no-cors',
      });
      if (result) setjaegerExists(true);
    } catch (err) {}
  };
  checkJaeger().catch(() => setjaegerExists(false));

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-s flex-center">
        <Image
          src="/Galvr.png"
          alt="Galvr Logo"
          width={70}
          height={70}
          className="object-contain"
        />
        <p className="logo_text">Galvr</p>
      </Link>

      <div className="sm:flex hidden">
        <div className="flex gap-3 md:grap-5">
          <Link href="metrics" className="black_btn">
            Metrics
          </Link>
          {jaegerExists && (
            <a href="http://localhost:16686/dependencies" className="black_btn">
              Traces
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
