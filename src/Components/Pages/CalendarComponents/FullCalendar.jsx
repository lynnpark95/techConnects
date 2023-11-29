import React, { useRef, useEffect } from "react";
import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

const FullCalendar = () => {
  const calendarRef = useRef(null);

<<<<<<< HEAD
  function showCalendarAlert() {
    const time = prompt("Enter a time for the meeting: ");
    const title = prompt("Enter a meetign title: ");
=======
  function showCalendarAlert(config) {
    const time = prompt("Enter a time for the meeting: ");
    const title = prompt("Enter a meeting title: ");
>>>>>>> origin/Master

    if (
      time === null ||
      time.trim() === "" ||
      title === null ||
      title.trim() === ""
    ) {
      alert("Enter the information first");
      return;
    }

    alert(`Event added: \nTime: ${time}\nTitle: ${title}`);

    updateCalendar(time, title);

    function updateCalendar(time, title) {
      console.log("Updated");
<<<<<<< HEAD
    }
=======
      console.log(title);
      console.log(time);
    }
    config.callback({title,time})
>>>>>>> origin/Master
  }

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
<<<<<<< HEAD
        alert(showCalendarAlert());
        // ADD BOOKING LOGIC
      },
      dayCellContent: function (arg) {
        return arg.dayNumberText + `<div></div>`;
=======
        showCalendarAlert({
          start: arg.start,
          title: arg.title,
          callback: (data) => {
            // ADD BOOKING LOGIC
            console.log('title = ' + data.title);
            console.log('time = ' + data.time);
          },
        });
        
      },
       
      dayCellContent: function (arg, title, time) {
        
        const popupInfo = 
           
          <div style="background-color: red; color: white; padding: 5px; border-radius: 5px;">
            <strong>${arg.dayNumberText}</strong>
            <br/>
            <span>Event: ${title}</span>
            <br/>
            <span>Time: ${time}</span>
          </div>
        ;
  
        return popupInfo;
>>>>>>> origin/Master
      },
      dayCellDidMount: function (arg) {
        if (arg.el) {
          arg.el.style.backgroundColor = "#edf3f9";
<<<<<<< HEAD

=======
  
>>>>>>> origin/Master
          const dayNumber = arg.el.querySelector(".fc-daygrid-day-number");
          if (dayNumber) {
            dayNumber.style.textDecoration = "none";
            dayNumber.style.fontSize = "20px";
          }
<<<<<<< HEAD

          //Still trying to get this to work

          const dayNames = arg.el.querySelectorAll(
            ".fc-col-header-cell fc-day"
          );
=======
  
          //Still trying to get this to work
  
          const dayNames = arg.el.querySelectorAll(".fc-col-header-cell.fc-day");
>>>>>>> origin/Master
          if (dayNames) {
            for (let i = 0; i < dayNames.length; i++) {
              dayNames[i].style.fontSize = "40px";
            }
          }
        }
      },
<<<<<<< HEAD

      dayCellClassNames: "non-link",
    });

    calendar.render();

=======
      dayCellClassNames: "non-link",
    });
  
    calendar.render();
  
>>>>>>> origin/Master
    return () => {
      calendar.destroy();
    };
  }, []);
<<<<<<< HEAD
=======
  
>>>>>>> origin/Master

  return (
    <div
      ref={calendarRef}
      style={{ marginRight: "20px", marginTop: "10px" }}
      className="non-link"
    />
  );
};

<<<<<<< HEAD
export default FullCalendar;
=======
export default FullCalendar;
>>>>>>> origin/Master
