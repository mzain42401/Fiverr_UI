"use client"
import { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const MyCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [eventName, setEventName] = useState('');
  const [events, setEvents] = useState({});

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="flex justify-between items-center mb-4">
        <button className="px-4 py-2 bg-[#2c2c2c] hover:bg-[#3c3c3c] rounded" onClick={prevMonth}>Prev</button>
        <div className="text-lg font-semibold">{format(currentMonth, dateFormat)}</div>
        <button className="px-4 py-2 bg-[#2c2c2c] hover:bg-[#3c3c3c] rounded" onClick={nextMonth}>Next</button>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "eee";
    const days = [];

    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="flex-1 text-center  py-2  font-medium" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="flex  ">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        const eventForDay = events[format(cloneDay, 'yyyy-MM-dd')] || [];
        days.push(
          <div
            className={`flex-1 border p-2  text-center cursor-pointer ${!isSameMonth(day, monthStart)
              ? "bg-gray-100"
              : isSameDay(day, selectedDate) ? " text-white" : "hover:bg-[#3c3c3c]"
              }`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span>{formattedDate}</span>
            {eventForDay.map((event, index) => (
              <div key={index} className="mt-1 text-sm bg-[#2c2c2c] rounded p-1">
                {event}
              </div>
            ))}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="flex " key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className=''>{rows}</div>;
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const saveEvent = () => {
    const dateKey = format(selectedDate, 'yyyy-MM-dd');
    setEvents((prevEvents) => {
      const eventsForDate = prevEvents[dateKey] || [];
      return {
        ...prevEvents,
        [dateKey]: [...eventsForDate, eventName]
      };
    });
    setEventName('');
    closeModal();
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <div className="mx-4  my-10 lg:w-[90%] w-[92%]">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-[#2c2c2c] font-medium leading-6 "
                  >
                    Set Event
                  </Dialog.Title>
                  <div className="mt-2">
                    <input
                      type="text"
                      className="w-full text-black border rounded p-2"
                      placeholder="Event Name"
                      value={eventName}
                      onChange={handleEventNameChange}
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#2c2c2c] px-4 py-2 text-sm font-medium text-white hover:bg-[#3c3c3c]"
                      onClick={saveEvent}
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MyCalendar;



