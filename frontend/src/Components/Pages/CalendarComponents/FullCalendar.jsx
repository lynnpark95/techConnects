import React, { useRef, useEffect } from "react";
import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

const FullCalendar = () => {
  const calendarRef = useRef(null);

  function showCalendarAlert(config) {
    const time = prompt("Enter a time for the meeting: ");
    const title = prompt("Enter a meeting title: ");

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
      console.log(title);
      console.log(time);
    }
    config.callback({title,time})
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
  
          const dayNames = arg.el.querySelectorAll(".fc-col-header-cell.fc-day");
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