import styles from './general.module.scss';
import { generalData } from '@/app/data';
import Pict1 from '../../../public/images/visvim_1.jpeg';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Index = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });
  const light = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const medium = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const heavy = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const heavy2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const arrSpeed = [light, medium, heavy, heavy2];
  return (
    <div ref={container} className={styles.container}>
      {generalData.map((data, i) => (
        <motion.div
          style={{ y: arrSpeed[i] }}
          className={styles['item-container']}
          key={i}
        >
          <div className={styles['image-container']}>
            <Image
              src={data.img}
              alt={`image_${i}`}
              fill
              priority
              placeholder='blur'
            />
          </div>
          <div className={styles.desc}>
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Index;
