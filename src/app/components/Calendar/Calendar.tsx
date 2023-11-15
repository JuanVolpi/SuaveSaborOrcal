'use client';

import { debug } from 'console';
import { getMonth } from './util';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import Month from './Month/Month';
import Sidebar from './Sidebar/Sidebar';
import { useState } from 'react';

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  return (
    <>
      <div className="h-screen w-screen flex-columns">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}
