"use client";
import { useState, useEffect } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

const MyCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [eventName, setEventName] = useState('');
  const [events, setEvents] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        <div className="flex-1 text-center py-2 font-medium" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="flex">{days}</div>;
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
            className={`flex-1 border p-2 text-center cursor-pointer ${!isSameMonth(day, monthStart)
              ? "bg-[#2c2c2c]"
              : isSameDay(day, selectedDate) ? " text-white" : "hover:bg-[#3c3c3c]"
              }`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span>{formattedDate}</span>
            {eventForDay.map((event, index) => (
              <div key={index} className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
                <div className="py-[2px] text-sm bg-[#2c2c2c] rounded">
                  {event}
                </div>
              </div>
            ))}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="flex" key={day}>
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

  if (!mounted) {
    return null;
  }

  return (
    <div className="mx-4 my-10 lg:w-[90%] w-[92%]">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-[#3a3a3a] p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                Please check over your content before publishing:
              </DialogTitle>
              <div className="p-6 rounded-lg">
                <div className="space-y-2">
                  <label className="flex items-center justify-between">
                    <span className="mr-2 text-base">Event Name</span>
                    <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
                      <input value={eventName} onChange={handleEventNameChange} required placeholder='set event name' type="text" className="w-full bg-[#3a3a3a] rounded text-base outline-none text-[#d3d3d3] px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="mr-2 text-base">Facebook</span>
                    <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
                      <input required placeholder='Account URL' type="text" className="w-full bg-[#3a3a3a] rounded text-base outline-none text-[#d3d3d3] px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="mr-2 text-base">LinkedIn</span>
                    <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
                      <input required placeholder='Account URL' type="text" className="w-full bg-[#3a3a3a] rounded text-base outline-none text-[#d3d3d3] px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="mr-2 text-base">Instagram</span>
                    <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
                      <input required placeholder='Account URL' type="text" className="w-full bg-[#3a3a3a] rounded text-base outline-none text-[#d3d3d3] px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="mr-2 text-base">X</span>
                    <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
                      <input required placeholder='Account URL' type="text" className="w-full bg-[#3a3a3a] rounded text-base outline-none text-[#d3d3d3] px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  </label>
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <div className="mt-4" onClick={closeModal}>
                  <div className='px-4 w-max'>
                    <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
                      <button className='px-4 py-2 border-[#3a3a3a] border-solid border-2 rounded bg-[#2c2c2c] text-[#d3d3d3]'>Cancel</button>
                    </div>
                  </div>
                </div>
                <div className="mt-4" onClick={saveEvent}>
                  <div className='px-4 w-max'>
                    <div className="bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
                      <button className='px-4 py-2 border-[#3a3a3a] border-solid border-2 rounded bg-[#2c2c2c] text-[#d3d3d3]'>Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default MyCalendar;
