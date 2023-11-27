import Image from "next/image";
import Calendar from "./components/Calendar/Calendar";
import ContextWrapper from "@/context/ContextWrapper";

export default function Home() {
  return (
    <main>
      <ContextWrapper>
        <Calendar></Calendar>
      </ContextWrapper>
    </main>
  );
}
