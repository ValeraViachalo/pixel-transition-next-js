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
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  );

  const handleExitComplete = () => {
    setDisplayComponent(false);
  };

  useEffect(() => {
    setDisplayComponent(true);
  }, [router.pathname]);


  useEffect(() => {
  
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const changeThemeOnSystemChange = () => setTheme(mediaQuery.matches ? 'dark' : 'light');

    mediaQuery.addListener(changeThemeOnSystemChange);
    return () => mediaQuery.removeListener(changeThemeOnSystemChange);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <main className={`app ${theme}`}>
      <RootLayout>
      <button onClick={toggleTheme}>
        Змінити тему
      </button>
        <AnimatePresence initial={false} mode="wait" onExitComplete={handleExitComplete}>
          {displayComponent && (
            <motion.div key={router.pathname}>
              <Component {...pageProps} />

              <Transition/> 
            </motion.div>
          )}
        </AnimatePresence>
      </RootLayout>
    </main>
  );
}
