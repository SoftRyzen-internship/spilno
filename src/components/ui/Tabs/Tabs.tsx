'use client';

import { useState } from 'react';
import { Tab } from '@headlessui/react';

import { cn } from '@/utils/cn';
import { TabsProps } from './types';

import { SectionTitle } from '../SectionTitle';

export const Tabs: React.FC<TabsProps> = ({ children, data, label, title }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Tab.Group manual selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <div className="xl:flex xl:justify-between">
        <div className="mb-8 md:mb-12 xl:mb-0 xl:flex xl:flex-col xl:justify-between">
          <div>
            <SectionTitle className="mb-4 xl:mb-6">{title}</SectionTitle>
            <p
              className="mb-8 font-raleway text-[14px] font-normal leading-[1.5] text-primaryText md:w-[448px]
              md:text-[16px] xl:mb-0 xl:text-[18px] smOnly:mr-10"
            >
              {label}
            </p>
          </div>

          <Tab.List as={'ul'} className={'flex gap-4 md:gap-8'}>
            {data.map(({ name }, idx) => (
              <Tab
                className={'relative outline-none'}
                key={`${name}${idx}`}
                as={'li'}
              >
                {({ selected }) => (
                  <button
                    className={cn(
                      'pb-2 text-[16px] font-normal leading-[1.25] transition-colors hover:text-accent focus:text-accent',
                      'md:pb-3 md:text-[20px] md:leading-[1.3]',
                      'xl:text-[24px] xl:leading-[1.25]',
                      {
                        'text-accent after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-accent':
                          selected,
                        'text-greyText': !selected,
                      },
                    )}
                  >
                    {name}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels>{children}</Tab.Panels>
      </div>
    </Tab.Group>
  );
};
