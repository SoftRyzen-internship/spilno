'use client';

import { useState } from 'react';
import { Tab } from '@headlessui/react';

import { AccordeonProps } from './types';

export const Accordeon: React.FC<AccordeonProps> = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <Tab.Group
        manual
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <Tab.List as={'ul'}>{children}</Tab.List>
      </Tab.Group>
    </>
  );
};
