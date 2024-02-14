'use client';
import Image from 'next/image';
import Zoom2 from '../../../public/images/zoom_1.png';
import Zoom1 from '../../../public/images/zoom_2.png';
import Zoom3 from '../../../public/images/zoom_3.png';
import styles from './zoom.module.scss';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const Index = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const picts = [
    {
      src: Zoom1,
      scale: scale2,
    },
    {
      src: Zoom2,
      scale: scale,
    },
    {
      src: Zoom3,
      scale: scale3,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {picts.map(({ src, scale }, i) => (
          <motion.div style={{ scale: scale }} className={styles.el} key={i}>
            <div className={styles.image}>
              <Image src={src} alt='' fill priority />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Index;
