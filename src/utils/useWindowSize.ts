import { useEffect, useState } from 'react';

export const useViewportSize = () => {
  const [viewportSize, setViewportSize] = useState<{
    width?: number | null;
    height: number | null;
  }>({ width: null, height: null });

  useEffect(() => {
    const onResize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };

    if (window !== undefined) {
      onResize();

      window.addEventListener('resize', onResize);
    }

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return viewportSize;
};
