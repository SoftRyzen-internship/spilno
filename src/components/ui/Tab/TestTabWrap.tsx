'use client';

import { useState } from 'react';

import { Tab } from '.';

{
  /* Для тесту */
}
const testData = [
  {
    name: 'Для бізнесу',
    data: "У вас є питання, а у нас є відповіді Ви також можете зв'язатися з нами, ми будемо раді відповісти на будь-які ваші запитання.",
  },
  {
    name: 'Для стажерів',
    data: 'Незалежно, чи ви успішний бізнес, фахівець у своїй галузі, чи представляєте громадські організації та волонтерів, у нас є рішення для кожного. Важливо відзначити, ',
  },
];

{
  /* Тестовий компонент */
}
export const TestTabWrap = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = testData.map(({ name }) => name);

  return (
    <>
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      <div>{testData[activeTab].data}</div>
    </>
  );
};
