'use client';

import { useState } from 'react';
import { Tab } from '@headlessui/react';

import { AccordionProps } from './types';
import { cn } from '@/utils/cn';

export const Accordion: React.FC<AccordionProps> = ({
  children,
  type,
  className,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div
      className={cn(
        {
          'sm:h-[526px] md:h-[580px] xl:h-[606px]': type === 'faq',
        },
        className,
      )}
    >
      <Tab.Group
        manual
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <Tab.List as={'ul'}>{children}</Tab.List>
      </Tab.Group>
    </div>
  );
};
