"use client";
import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useState } from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import DayModal from "../../Modal/DayModal/DayModal";
dayjs.locale("pt-br");

interface DayProps {
  day: dayjs.Dayjs;
  rowIdx: number;
}

export default function Day({ day, rowIdx }: DayProps) {
  const [isHovering, setIsHovering] = useState(false);
  const openDayModal = useDisclosure();

  const dayAcronym = day.format("ddd").toUpperCase();
  const dayNumber = day.format("DD");
  const monthName = day.format("MMMM YYYY");

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-500 text-white self-center rounded-full w-7"
      : "";
  }

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => setIsHovering(false)}
      className={`border border-gray-200 rounded-md flex flex-col text-center ${
        isHovering
          ? "transform duration-300 ease-in-out hover:-translate-y-1 hover:border-none bg-slate-500/10"
          : "transform duration-300 translate-y-0"
      }`}
    >
      <header className="flex flex-col item-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1 text-center">{dayAcronym}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {dayNumber}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer bg-green-500/10"
        onClick={openDayModal.onOpen}
      ></div>
      <DayModal
        dayInfo={{
          dayNumber,
          monthName: monthName,
        }}
        openModal={openDayModal}
      />
    </div>
  );
}
