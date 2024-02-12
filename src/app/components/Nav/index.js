import React from 'react';
import styles from './nav.module.scss';
import Link from 'next/link';

const index = () => {
  return (
    <ul className={styles.container}>
      <li>
        <Link href='/'>Zoom</Link>
      </li>
      <li>
        <Link href='/'>General</Link>
      </li>
    </ul>
  );
};

export default index;
