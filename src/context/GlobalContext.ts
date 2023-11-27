'use client'
import React from "react";

interface GlobalContextProps {
  monthIndex: any;
  setMonthIndex: (index: any) => void;
}

const GlobalContext = React.createContext<GlobalContextProps>({
  monthIndex: 0,
  setMonthIndex: (index) => {},
});

export default GlobalContext;

