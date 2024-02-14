'use client';
import { useEffect } from 'react';
import General from '@/components/General';
import Zoom from '@/components/Zoom';
import Lenis from '@studio-freight/lenis';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <General />
      <Zoom />
    </>
  );
}
