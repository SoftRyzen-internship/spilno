'use client';

import { cn } from '@/utils/cn';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const initialColor = 'grey';
const fillColor = 'blue';

const TrackImpression: React.FC = () => {
  const [active, setActive] = useState(false);
  const { ref, entry } = useInView({
    root: null,
    rootMargin: '0%',
    triggerOnce: false,
    threshold: 0.2,
    delay: 100,
  });

  useEffect(() => {
    const colorize = () => {
      if (typeof window !== 'undefined' && entry) {
        const halfScreenHeight = window.innerHeight / 2;
        const rect = entry.target.getBoundingClientRect();
        const depthPx = rect.bottom - halfScreenHeight;
        const depthPercent = (depthPx * 100) / rect.height;
        const element = entry.target as HTMLElement;

        // ELEMENT CROSS THE CENTER VIEW
        if (rect.bottom > halfScreenHeight && rect.top < halfScreenHeight) {
          // setActive(true);
          element.style.background = 'linear-gradient(to top, '
            .concat(initialColor, ' ')
            .concat(String(depthPercent), '%, ')
            .concat(fillColor, ' ')
            .concat(String(depthPercent), '% 100%)');
          element.style.transform = 'translateZ(0)';
        }
        // ELEMENT HAVE CROSSED THE CENTER VIEW
        if (rect.bottom < halfScreenHeight) {
          console.log('ELEMENT HAVE CROSSED THE CENTER VIEW');

          element.style.background = fillColor;
          element.style.transform = 'unset';
          // setActive(true);
        }
        // ELEMENT HAVE NOT CROSSED THE CENTER VIEW
        if (rect.top > halfScreenHeight) {
          // setActive(false);
          console.log('ELEMENT HAVE NOT CROSSED THE CENTER VIEW');
          element.style.background = initialColor;
        }
      }
    };
    const animation = function () {
      if (typeof window !== 'undefined') {
        window.requestAnimationFrame(function () {
          colorize();
        });
      }
    };
    document.addEventListener('scroll', animation);
    return function () {
      document.removeEventListener('scroll', animation);
    };
  }, [entry]);

  return (
    <div
      ref={ref}
      className={cn('p-4 text-2xl font-bold text-black transition-colors', {
        'text-red': active,
      })}
    >
      <p>THIS IS OBSERVER</p>
    </div>
  );
};

export default TrackImpression;

/**
 *   // onChange(_inView, entry) {
    //   let halfScreenHeight;
    //   if (typeof window !== 'undefined') {
    //     halfScreenHeight = window.innerHeight / 2;
    //     const rect = entry.target.getBoundingClientRect();
    //     console.log('🚀 --------------------------🚀');
    //     console.log('🚀 ~ onChange ~ rect:', rect);
    //     console.log('🚀 --------------------------🚀');

    //     const depthPx = rect.bottom - halfScreenHeight;
    //     const depthPercent = (depthPx * 100) / rect.height;
    //     const element = entry.target as HTMLElement;
    //     // ELEMENT CROSS THE CENTER VIEW
    //     if (rect.bottom > halfScreenHeight && rect.top < halfScreenHeight) {
    //       // setActive(true);
    //       element.style.background = 'linear-gradient(to top, '
    //         .concat(initialColor, ' ')
    //         .concat(String(depthPercent), '%, ')
    //         .concat(fillColor, ' ')
    //         .concat(String(depthPercent), '% 100%)');
    //       element.style.transform = 'translateZ(0)';
    //     }
    //     // ELEMENT HAVE CROSSED THE CENTER VIEW
    //     if (rect.bottom < halfScreenHeight) {
    //       element.style.background = fillColor;
    //       element.style.transform = 'unset';
    //       // setActive(true);
    //     }
    //     // ELEMENT HAVE NOT CROSSED THE CENTER VIEW
    //     if (rect.top > halfScreenHeight) {
    //       // setActive(false);
    //       element.style.background = initialColor;
    //     }
    //   }
    // },
 */
