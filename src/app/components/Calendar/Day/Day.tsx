'use client';
import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { useState } from 'react';
dayjs.locale('pt-br');

interface DayProps {
  day: dayjs.Dayjs;
  rowIdx: number;
}

export default function Day({ day, rowIdx }: DayProps) {
  const [isHovering, setIsHovering] = useState(false);

  function getCurrentDayClass() {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-blue-500 text-white self-center rounded-full w-7'
      : '';
  }

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`border border-gray-200 rounded-md flex flex-col text-center ${
        isHovering
          ? 'transform duration-300 ease-in-out hover:-translate-y-1 hover:border-none cursor-pointer bg-slate-500/10'
          : 'transform duration-300 translate-y-0'
      }`}
    >
      <header className="flex flex-col item-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1 text-center">
            {day.format('ddd').toUpperCase()}
          </p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
      </header>
    </div>
  );
}
