import React, { useRef, useEffect } from "react";
import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

const FullCalendar = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendarEl = calendarRef.current;

    const calendar = new Calendar(calendarEl, {
      plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
      headerToolbar: {
        left: "prev next",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      initialView: "dayGridMonth",
      selectable: true,
      select: function (arg) {
        alert("You clicked on: " + arg.startStr);
        // ADD BOOKING LOGIC
      },
      dayCellContent: function (arg) {
        return arg.dayNumberText;
      },
      dayCellDidMount: function (arg) {
        if (arg.el) {
          arg.el.style.backgroundColor = "#edf3f9";

          const dayNumber = arg.el.querySelector(".fc-daygrid-day-number");
          if (dayNumber) {
            dayNumber.style.textDecoration = "none";
            dayNumber.style.fontSize = "20px";
          }

          //Still trying to get this to work

          const dayNames = arg.el.querySelectorAll(
            ".fc-col-header-cell fc-day"
          );
          if (dayNames) {
            for (let i = 0; i < dayNames.length; i++) {
              dayNames[i].style.fontSize = "40px";
            }
          }
        }
      },

      dayCellClassNames: "non-link",
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, []);

  return (
    <div
      ref={calendarRef}
      style={{ marginRight: "20px", marginTop: "10px" }}
      className="non-link"
    />
  );
};

export default FullCalendar;
