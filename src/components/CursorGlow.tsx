import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CursorGlow = () => {
  const mouseX = useSpring(0, { stiffness: 150, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 150, damping: 25 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePos = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePos);
    return () => window.removeEventListener('mousemove', updateMousePos);
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="fixed top-0 left-0 w-[60px] h-[60px] pointer-events-none z-0 hidden md:block"
    >
      <div className="w-full h-full bg-primary-500/40 dark:bg-primary-500/30 rounded-full blur-[20px]" />
    </motion.div>
  );
};
