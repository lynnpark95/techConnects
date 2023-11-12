import React, { useRef, useEffect } from 'react';
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


const FullCalendar = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendarEl = calendarRef.current;

    const calendar = new Calendar(calendarEl, {
      plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialView: 'dayGridMonth',
      selectable: true, 
      select: function(arg) {
        
        alert('You clicked on: ' + arg.startStr);
        // integrate  actual booking logic, e.g., API calls or modals
        
      }
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, []);

  return <div ref={calendarRef} />;
};

export default FullCalendar;
