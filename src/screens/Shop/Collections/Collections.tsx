import Image from "next/image"
import styles from './Collections.module.scss';

export const Collection = () => {
  return (
    <section className={styles.collection}>
      <ul className={styles.collection__list}>
        {['1', '2', '3'].map(index => (
          <li key={index}>
            <Image
              src={`/media/shop-${index}.webp`}
              width={1500}
              height={1000}
              alt={`collection-${index}`}
              className={styles.collection__image}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}