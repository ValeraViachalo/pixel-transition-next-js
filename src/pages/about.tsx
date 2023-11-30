import { Transition } from "@/components/Transition1/Transition";
import { Article } from "@/screens/About/Article/Article";
import { useIsPresent } from "framer-motion";


const About = () => {
  const isPresent = useIsPresent();
  return (
    <>
      <main className="container">
        <Article />
      </main>

      {/* <Transition isPresent={isPresent}/> */}
    </>
  );
};

export default About;
