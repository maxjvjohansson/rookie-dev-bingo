"use client";

import { useEffect, useState } from "react";

export function useScreenSize(breakpoint: number): boolean {
  const [isBelow, setIsBelow] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsBelow(window.innerWidth < breakpoint);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isBelow;
}
