import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const events = [
    { title: "Event 1", date: "2023-06-20" },
    { title: "Event 2", date: "2023-06-22" },
    { title: "Event 3", date: "2023-06-24" },
  ];

export function Calendar() {
 
    return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={renderEventContent}
      />
    );
  }

  // a custom render function
function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }