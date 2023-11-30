import Image from "next/image";
import styles from './Article.module.scss';

export const Article = () => {
  return (
    <div className={styles.article}>
      <h1>
        A Look At A$AP Rocky’s Debut PUMA X Formula 1 Capsule Collection THE
        A$AP MOB RAPPER AND NEWLY APPOINTED CREATIVE DIRECTOR IS SHOWING US WHAT
        HE’S GOT WHEN IT COMES TO DESIGN.
      </h1>
      <Image
        src="/media/about.webp"
        alt="asap in about"
        width={1500}
        height={1000}
        className={styles.article__image}
      />
      <h2 className={styles.article__subPhoto}>  
        BY KERANE MARCELLUS · UPDATED NOVEMBER 14, 2023 
      </h2>
    </div>
  );
};
