"use client";

import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import theme from "./theme";
import BlockAccess from "./blockAccess";
import { useEffect, useState } from "react";

export const metadata = {
  title: "Mizugomi",
  description: "Reporta lo que Nito no ta haciendo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [windowSize, setWindowSize] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize(window.innerWidth);
      window.addEventListener("resize", () => setWindowSize(window.innerWidth));
    }
    return () => {};
  }, []);

  if (windowSize > 500) {
    return (
      <html>
        <body>
          <BlockAccess />
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body>
        <main>
          <CacheProvider>
            <ChakraProvider theme={theme}>
              <Navbar />
              {children}
            </ChakraProvider>
          </CacheProvider>
        </main>
      </body>
    </html>
  );
}
