import { Button } from "@nextui-org/button";
import logo from "/public/logo.png";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";
import { Spacer } from "@nextui-org/react";
import { useContext, useState } from "react";
import GlobalContext from "@/context/GlobalContext";
import dayjs from "dayjs";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handlNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  return (
    <>
      <header className="px-4 py-2 flex items-center">
        <img
          src="logo.png"
          alt="Calendário de Encomendas"
          className="mr-2 object-contain h-fit w-56"
        />
        <h1 className="mr-10 text-xl text-gray-500 font-bold">Calendário</h1>
        <Button color="primary" className="border rounded py-2 px-4 mr-5">
          Today
        </Button>
        <Button
          isIconOnly
          color="danger"
          aria-label="Like"
          onClick={handlePrevMonth}
        >
          <ChevronLeftIcon className="w-5" />
        </Button>
        <Spacer />
        <Button
          isIconOnly
          color="danger"
          aria-label="Like"
          onClick={handlNextMonth}
        >
          <ChevronRightIcon className="w-5" />
        </Button>
        <h2 className="mx-4 font-bold text-blue-500 text-xl capitalize">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
      </header>
    </>
  );
}
