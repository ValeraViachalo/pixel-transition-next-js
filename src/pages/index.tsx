import { Transition } from "@/components/Transition1/Transition";
import { Hero } from "@/screens/Home/Hero/Hero";
import { useIsPresent } from "framer-motion";

const App = () => {
  const isPresent = useIsPresent();
  return (
    <>
      <main className="container">
        <Hero />
      </main>

      {/* <Transition isPresent={isPresent}/> */}
    </>
  )
}

export default App;