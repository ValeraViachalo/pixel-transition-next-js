import Image from "next/image"
import styles from "./Hero.module.scss"

export const Hero = () => {
  return (
    <section className={`container ${styles.hero}`}>  
      <Image
        src="/media/asap_main.jpg"
        alt="asap main"
        className={styles.hero__image}
        width={1000}
        height={100}
        />
     <Image
        src="/media/home_second.webp"
        alt="asap"
        className={styles.hero__imageSecondary}
        width={1000}
        height={100}
     />
     
    </section>
  )
}