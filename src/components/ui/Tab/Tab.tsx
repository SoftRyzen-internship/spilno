'use client';

import { cn } from '@/utils/cn';

import { TabProps } from './types';

export const Tab: React.FC<TabProps> = ({ activeTab, setActiveTab, tabs }) => (
  <ul className="flex gap-4 md:gap-8">
    {tabs.map((tab, idx) => (
      <li key={idx} className="relative">
        <button
          className={cn(
            'pb-2 text-[16px] font-normal leading-[1.25] transition-colors hover:text-accent focus:text-accent md:pb-3 md:text-[20px] md:leading-[1.3] xl:text-[24px] xl:leading-[1.25]',
            {
              'text-accent after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-accent':
                activeTab === idx,
              'text-greyText': activeTab !== idx,
            },
          )}
          onClick={() => {
            setActiveTab(idx);
          }}
          type="button"
        >
          {tab}
        </button>
      </li>
    ))}
  </ul>
);
