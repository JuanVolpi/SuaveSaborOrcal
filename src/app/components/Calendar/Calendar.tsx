"use client";

import { debug } from "console";
import { getMonth } from "./util";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import Month from "./Month/Month";
import Sidebar from "./Sidebar/Sidebar";
import { useState, useContext, useEffect } from "react";
import GlobalContext from "@/context/GlobalContext";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

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
