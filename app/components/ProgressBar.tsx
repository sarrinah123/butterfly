"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const update = () => {
      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const current =
        (window.scrollY / total) * 100;

      setScroll(current);
    };

    window.addEventListener("scroll", update);

    return () =>
      window.removeEventListener(
        "scroll",
        update
      );
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-pink-500 z-[100]"
      style={{
        width: `${scroll}%`,
      }}
    />
  );
}