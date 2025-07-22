"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const CountryContext = createContext();

export function CountryProvider({ children }) {
  const pathname = usePathname();
  const [country, setCountry] = useState("india");

  useEffect(() => {
    if (pathname.startsWith("/au")) {
      setCountry("au");
    } else {
      setCountry("india");
    }
  }, [pathname]);

  const value = {
    country,
    setCountry,
  };

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
}

export function useCountry() {
  return useContext(CountryContext);
}
