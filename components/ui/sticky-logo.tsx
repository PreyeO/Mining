// StickyLogo.tsx
"use client";

import Image from "next/image";

const StickyLogo = () => {
  return (
    <div className="fixed bottom-6 left-6 z-[9999] bg-white p-2 rounded-full shadow-lg border border-gray-300">
      <Image
        src="/logo.png"
        alt="Paret Logo"
        width={80}
        height={80}
        className="object-contain md:hidden"
      />
      <Image
        src="/logo.png"
        alt="Paret Logo"
        width={120}
        height={120}
        className="object-contain hidden md:block"
      />
    </div>
  );
};

export default StickyLogo;
