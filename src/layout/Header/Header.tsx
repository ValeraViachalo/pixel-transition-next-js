import Link from "next/link";
import styles from "./Header.module.scss";
import { FC } from "react";

import navigation from '@/data/navigation.json';

export const Header = () => {

  return (
    <header className={styles.header}>
      <ul className={styles.header__list}>
        {navigation.map((currentLink, index) => {
          const {title, link, bodyColor} = currentLink;

          return (
          <li key={index} className={styles.header__item}>
            <Link
              href={link}
              className={styles.header__link}
            >
              {title}
            </Link>
          </li>
        )})}
      </ul>
    </header>
  );
};
