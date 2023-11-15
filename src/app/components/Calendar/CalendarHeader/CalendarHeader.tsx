import { Button } from '@nextui-org/button';
import logo from '../../../../public/logo.png';
import { BeakerIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import UserIcon from '@heroicons/react/24/outline/UserIcon';
import { User } from 'heroicons-react';

export default function CalendarHeader() {
  return (
    <>
      <header className="px-4 py-2 flex items-center">
        <img
          src="logo.png"
          alt="Calendário de Encomendas"
          className="mr-2 w-fit h-16"
        />
        <h1 className="mr-10 text-xl text-gray-500 font-bold">Calendário</h1>
        <Button color="primary" className="border rounded py-2 px-4 mr-5">
          Today
        </Button>
        <Button isIconOnly color="danger" aria-label="Like">
          <ChevronLeftIcon className="w-5" />
        </Button>
      </header>
    </>
  );
}
