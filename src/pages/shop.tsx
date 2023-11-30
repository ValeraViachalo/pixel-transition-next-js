import { Transition } from "@/components/Transition1/Transition";
import { Collection } from "@/screens/Shop/Collections/Collections"
import { useIsPresent } from "framer-motion";

const Shop = () => {
  const isPresent = useIsPresent();
  
  return (
    <>
      <main className="container">
        <Collection />
      </main>

      {/* <Transition isPresent={isPresent}/> */}
    </>
  )
}

export default Shop