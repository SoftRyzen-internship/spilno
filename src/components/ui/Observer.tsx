'use client';

import { cn } from '@/utils/cn';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const TrackImpression: React.FC = () => {
  const { ref, inView, entry } = useInView({
    rootMargin: '0% 0% -50% 0%',
    triggerOnce: false,
    threshold: 0,
    onChange(inView, entry) {
      const elment = entry.target;
      const boundingRect = entry.boundingClientRect;
      const intersectionRect = entry.intersectionRect;

      if (boundingRect.top < intersectionRect.top) {
        elment.innerText = 'on the top';
      } else {
        elment.innerText = 'on the bottom';
      }
    },
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && entry) {
      console.log(entry?.boundingClientRect);
      console.log(entry);
    }
  }, [entry]);

  return (
    <div
      ref={ref}
      className={cn('h-8 bg-accent p-4 transition-colors', {
        'bg-darkBg': inView,
      })}
    ></div>
  );
};

export default TrackImpression;
