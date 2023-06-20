import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useState } from "react";

interface Event {
  title: string;
  start: Date;
}

const customEvents: Event[] = [
  { title: "Available appointments", start: new Date() }
];

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleEventClick = (arg: any) => {
    if (arg.event.start) {
      const clickedDate = arg.event.start;
      setSelectedDate(clickedDate);
    }
  };

  const renderEventContent = (eventInfo: any) => {
    return (
      <>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={customEvents}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
      />
      {selectedDate && (
        <div>
          <h3>Selected Date: {selectedDate.toDateString()}</h3>
        </div>
      )}
    </div>
  );
}