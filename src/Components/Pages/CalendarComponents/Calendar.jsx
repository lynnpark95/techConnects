import React, { useState } from 'react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import TimePicker from 'react-time-picker';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import Navbar from '../../Navbar Items/Navbar';

const Calendar = () => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isDayCellClicked, setIsDayCellClicked] = useState(false);

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  const handleDateClick = () => {
    setIsDayCellClicked(true);
  };

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event');
  
    // Check if title is not null
    if (title !== null) {
      let calendarApi = selectInfo.view.calendar;
  
      calendarApi.unselect(); // clear date selection
  
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    } else {
      alert('Title is required. Event not added.');
    }
  };
  
  
  const handleEventClick = (clickInfo) => {
    const userConfirmed = window.confirm(
      `Are you sure you want to delete the event '${clickInfo.event.title}'`
    );

    if (userConfirmed) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const renderEventContent = (eventInfo) => (
    <>
      <i>Meeting: {eventInfo.event.title}</i>
    </>
  );
  

  const renderSidebarEvent = (event) => (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </b>
      <br/>
      <b>Meeting Title:</b> <i>{event.title}</i>
      <i> {event.extendedProps.time}</i>
    </li>
  );

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', fontFamily: 'Arial, Helvetica Neue, Helvetica, sans-serif', fontSize: '14px' }}>
        <div style={{ flexGrow: 1, padding: '2em', display: 'flex', marginLeft: '300px' }}>
          <div style={{ width: '900px', margin: '0 auto' }}>
            <FullCalendar
              plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
              headerToolbar={{
                left: 'prev next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
              }}
              initialView='dayGridMonth'
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={weekendsVisible}
              initialEvents={INITIAL_EVENTS}
              select={handleDateSelect}
              eventContent={renderEventContent}
              eventClick={handleEventClick}
              eventsSet={handleEvents}
              dateClick={handleDateClick}
            />
          </div>
          
          <div style={{ flexShrink: 0, padding: '1em', backgroundColor: '#F9F5DD', marginLeft:'20px', width: '300px' }}>
            <h2>Instructions</h2>
            <ul>
              <li>Select dates and you will be prompted to create a new event</li>
              <li>Drag, drop, and resize events</li>
              <li>Click an event to delete it</li>
              <li>Use the <b>'week'</b> and <b>'day'</b> options to make time specific appointments</li>
            </ul>

            
            <div className='demo-app-sidebar-section'>
              <h2>All Events ({currentEvents.length})</h2>
              <ul>
                {currentEvents.map(renderSidebarEvent)}
              </ul>
            </div>

            <div className='demo-app-sidebar-section' style={{fontSize: '20px'}}>
              <label>
                <input
                  type='checkbox'
                  checked={weekendsVisible}
                  onChange={handleWeekendsToggle}
                  style={{paddingLeft: '30px'}}
                />
                Toggle weekends
              </label>
            </div>
          </div>
        </div>
        </div>
      </div>
    
  );
};

export default Calendar;
