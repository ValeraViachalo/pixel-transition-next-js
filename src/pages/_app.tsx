import Image from "next/image";
import { AppProps } from "next/app";
import RootLayout from "@/layout/Layout";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { Transition } from "@/components/Transition/Transition"; // Make sure to import the Transition component
import { useEffect, useState } from "react";



export default function App({ Component, ...pageProps }: AppProps) {
  const router = useRouter();
  const [displayComponent, setDisplayComponent] = useState(true);

  const handleExitComplete = () => {
    setDisplayComponent(false);
  };

  useEffect(() => {
    setDisplayComponent(true);
  }, [router.pathname]);

  return (
    <main>
      <RootLayout>
        <AnimatePresence initial={false} mode="wait" onExitComplete={handleExitComplete}>
          {displayComponent && (
            <motion.div key={router.pathname}>
              <Component {...pageProps} />

              <Transition/> {/* Replace the two motion divs with the Transition component */}
            </motion.div>
          )}
        </AnimatePresence>
      </RootLayout>
    </main>
  );
}
